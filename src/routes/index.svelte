<script context="module">
import { cached } from '$lib/local-cache.js';

export async function load({ fetch }) {
  const prices = await fetch('https://fapi.binance.com/fapi/v1/ticker/price').then((r) => r.json());

  return {
    props: {
      prices: prices.filter((p) => p.symbol.endsWith('USDT'))
    }
  };
}
</script>

<script>
import { writable } from 'svelte-local-storage-store';

export let prices;
export let brackets;

let currency = 'USDT';
let entry_price = 1;

const balance = writable('3c.balance', 10000);
const coin = writable('3c.coin', 'BTCUSDT');
const base_order = writable('3c.base_order', {
  value: 10,
  type: '%'
});
const safety_order = writable('3c.safety_order', {
  count: 15,
  value: 5,
  type: '%',
  price_dev: 0.99,
  volume_scale: 1.3,
  step_scale: 1
});
const take_profit = writable('3c.take_profit', 0.6);
const leverage = writable('3c.leverage', 20);
const long = writable('3c.long', true);
const reverse = writable('3c.reverse', true);

let last;
let liquidated_at;
let min_buy = 1;
let table = [];

function round(num) {
  return num.toLocaleString(undefined, {
    maximumSignificantDigits: 5
  });
}

function calc_size_vol(volume, price) {
  let raw_size = volume / price;
  let size = Math.ceil(raw_size / min_buy) * min_buy;
  volume *= size / raw_size;
  return [size, volume];
}

function perc_color(perc, alpha, colors) {
  if (perc < 0 || perc > 1 || (perc != 0 && !perc)) return '';
  const i = colors.findIndex((c) => perc <= c.perc) || 1;
  const lower = colors[i - 1];
  const upper = colors[i];
  const pos = (perc - lower.perc) / (upper.perc - lower.perc);
  const percLower = 1 - pos;
  const percUpper = pos;
  const color = {
    r: Math.floor(lower.color.r * percLower + upper.color.r * percUpper),
    g: Math.floor(lower.color.g * percLower + upper.color.g * percUpper),
    b: Math.floor(lower.color.b * percLower + upper.color.b * percUpper)
  };
  return 'rgba(' + [color.r, color.g, color.b, alpha].join(',') + ')';
}

let range_colors = [
  { perc: 0, color: { r: 0, g: 255, b: 0 } },
  { perc: 0.5, color: { r: 0, g: 255, b: 255 } },
  { perc: 1, color: { r: 0, g: 0, b: 255 } }
];

let min_req_change = $take_profit;
let max_req_change = $take_profit;
let first_bad;

$: order_errors = (order) => {
  let errors = [];
  if (order.total_margin > $balance) {
    errors.push(`Total margin used (${round(order.total_margin)}$) is more than available balance (${round($balance)}$)`);
  }
  if (-order.pnl > $balance) {
    errors.push(`PnL (${round(order.pnl)}$) is higher than available balance (${round($balance)}$). Will be liquidated`);
  }
  if (order.total_volume > bracket?.volume_cap) {
    errors.push(`Total volume (${round(order.total_volume)}$) is higher than future volume cap (${round(bracket?.volume_cap)}$)`);
  }
  return errors;
};

$: {
  let bo_vol = $base_order.value;
  if ($base_order.type == '%') {
    bo_vol = ($balance * $base_order.value) / 100;
  }
  let so_vol = $safety_order.value;
  if ($safety_order.type == '%') {
    so_vol = ($balance * $safety_order.value) / 100;
  }

  let ntable = [];

  let price_dev = 0;
  let avg_price = entry_price;
  let [total_size, total_volume] = calc_size_vol(bo_vol, entry_price);
  ntable.push({
    order: 'BO',
    price_dev: 0,
    price: entry_price,
    avg_price,
    size: total_size,
    margin: total_volume / $leverage,
    volume: bo_vol,
    req_price: entry_price * (1 + $take_profit / 100),
    req_change: $take_profit,
    pnl: 0,
    tp: (total_volume * $take_profit) / 100,
    total_size,
    total_volume,
    total_margin: total_volume / $leverage
  });

  min_req_change = $take_profit;
  max_req_change = $take_profit;

  for (let i = 0; i < $safety_order.count; i++) {
    price_dev = price_dev * $safety_order.step_scale - $safety_order.price_dev;
    const price = entry_price * (1 + price_dev / 100);
    const raw_volume = so_vol * Math.pow($safety_order.volume_scale, i);
    const [size, volume] = calc_size_vol(raw_volume, price);
    const margin = volume / leverage;
    total_volume += volume;
    total_size += size;
    avg_price = total_volume / total_size;
    const total_margin = total_volume / $leverage;
    const req_price = avg_price * (1 + $take_profit / 100);
    const req_change = (req_price / price - 1) * 100;
    const pnl = -(1 - price / avg_price) * total_volume;

    if (req_change < min_req_change) min_req_change = req_change;
    if (req_change > max_req_change) max_req_change = req_change;

    ntable.push({
      order: `#${i + 1}`,
      price_dev,
      price,
      avg_price,
      size,
      margin: volume / $leverage,
      volume,
      req_price,
      req_change,
      tp: (total_volume * $take_profit) / 100,
      pnl,
      total_size,
      total_volume,
      total_margin
    });
  }

  ntable = ntable.map((o) => ({ ...o, errors: order_errors(o) }));
  first_bad = ntable.find((o) => o.errors.length > 0);

  table = ntable;
  last = table[table.length - 1];
  if ($reverse) table = table.reverse();

  liquidated_at = last.avg_price * (1 - $balance / last.total_volume);
}

$: coin_brackets = brackets?.find((b) => b.symbol == $coin)?.brackets || [];
$: bracket = coin_brackets?.find((b) => b.minLeverage <= $leverage && $leverage <= b.maxLeverage);
$: {
  if ($leverage > coin_brackets[0]?.maxLeverage) $leverage = coin_brackets[0]?.maxLeverage;
}

let last_coin = '';
$: {
  if ($coin != last_coin) {
    last_coin = coin;
    entry_price = prices?.find((c) => c.symbol == $coin)?.price || 1;
  }
}

cached('3c.brackets-cache', 24 * 60 * 60, () => {
  return fetch(`https://cors.bridged.cc/https://www.binance.com/bapi/futures/v1/friendly/future/common/brackets`, {
    headers: {
      'content-type': 'application/json'
    },
    body: '{}',
    method: 'POST'
  }).then((r) => r.json());
}).then((b) => {
  brackets = b.data.brackets.map((b) => ({
    symbol: b.symbol,
    brackets: b.riskBrackets.map((rb) => ({
      volume_cap: rb.bracketNotionalCap,
      minLeverage: rb.minOpenPosLeverage,
      maxLeverage: rb.maxOpenPosLeverage
    }))
  }));
});

let active_order;
</script>

<style lang="postcss">
th,
td {
  @apply border border-gray-500 px-4;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type='number'] {
  -moz-appearance: textfield;
}

.liquidated {
  background: rgba(255, 0, 0, 0.4);
}
</style>

<div class="grid grid-cols-3 gap-8">
  <div class="col-span-2 grid grid-cols-3 gap-6">
    <div>
      <label for="balance" class="block mb-1">Wallet Balance</label>
      <div class="flex">
        <input type="number" name="balance" bind:value={$balance} step="10" />
        <span class="px-4 py-2 border border-l-0 border-gray-500 bg-gray-700"> {currency} </span>
      </div>
    </div>

    <div>
      <label for="coin" class="block mb-1">Coin</label>
      <select name="coin" class="focus:ring-indigo-500 focus:border-indigo-500 bg-gray-900 block w-full" bind:value={$coin}>
        {#each prices as coin}
          <option value={coin.symbol}>{coin.symbol.slice(0, -4)} / USDT</option>
        {/each}
      </select>
    </div>

    <div>
      <label for="entry_price" class="block mb-1">Entry Price</label>
      <div class="flex">
        <input type="text" name="entry_price" bind:value={entry_price} />
        <span class="px-4 py-2 border border-l-0 border-gray-500 bg-gray-700"> {currency} </span>
      </div>
    </div>

    <div>
      <label for="bo_size" class="block mb-1">Base Order size</label>
      <div class="flex">
        <input type="number" name="bo_size" bind:value={$base_order.value} step="0.01" />
        <div>
          <select name="$base_order_type" class="focus:ring-indigo-500 focus:border-indigo-500 bg-gray-700" bind:value={$base_order.type}>
            <option value="%">%</option>
            <option value="price">{currency}</option>
          </select>
        </div>
      </div>
      {#if $base_order.type == '%'}
        <div class="font-bold">
          Value: {($balance * $base_order.value) / 100}
          {currency}
        </div>
      {/if}
    </div>

    <div>
      <label for="so_size" class="block mb-1">Safety Order size</label>
      <div class="flex">
        <input type="number" name="so_size" bind:value={$safety_order.value} step="0.01" />
        <div>
          <select name="so_type" class="focus:ring-indigo-500 focus:border-indigo-500 bg-gray-700" bind:value={$safety_order.type}>
            <option value="%">%</option>
            <option value="price">{currency}</option>
          </select>
        </div>
      </div>
      {#if $safety_order.type == '%'}
        <div class="font-bold">
          Value: {($balance * $safety_order.value) / 100}
          {currency}
        </div>
      {/if}
    </div>

    <div>
      <label for="take_profit" class="block mb-1">Take Profit</label>
      <div class="flex">
        <input type="number" name="take_profit" bind:value={$take_profit} min="0.05" max="50" step="0.01" />
        <span class="px-4 py-2 border border-l-0 border-gray-500 bg-gray-700">%</span>
      </div>
    </div>

    <div>
      <label for="long" class="block mb-1">Long or short</label>
      <div class="flex">
        <input type="checkbox" name="long" class="focus:ring-indigo-500 focus:border-indigo-500 bg-gray-900" bind:checked={$long} />
        Long
      </div>
    </div>

    <div class="col-span-3">
      <label for="max_safety_trades" class="block mb-1">Max safety trades count</label>
      <div class="flex">
        <input name="max_safety_trades" type="range" class="block w-full mr-3" bind:value={$safety_order.count} min="0" max="100" />
        <input type="number" bind:value={$safety_order.count} min="0" max="100" />
      </div>
    </div>

    <div class="col-span-3">
      <label for="leverage" class="block mb-1">Leverage</label>
      <div class="flex">
        <input name="leverage" type="range" class="block w-full mr-3" bind:value={$leverage} min="1" max={coin_brackets[0]?.maxLeverage || 20} />
        <input type="number" bind:value={$leverage} min="1" max={coin_brackets[0]?.maxLeverage || 20} />
      </div>
    </div>

    <div class="col-span-3">
      <label for="price_deviation" class="block mb-1">Price deviation to open safety orders</label>
      <div class="flex">
        <input name="price_deviation" type="range" class="block w-full mr-3" bind:value={$safety_order.price_dev} min="0.2" max="12" step="0.01" />
        <input type="number" bind:value={$safety_order.price_dev} min="0.2" max="12" step="0.01" />
        <span class="px-4 py-2 border border-l-0 border-gray-500 bg-gray-700">%</span>
      </div>
    </div>

    <div class="col-span-3">
      <label for="so_volume_scale" class="block mb-1">Safety order volume scale</label>
      <div class="flex">
        <input name="so_volume_scale" type="range" class="block w-full mr-3" bind:value={$safety_order.volume_scale} min="0.1" max="10" step="0.01" />
        <input type="number" bind:value={$safety_order.volume_scale} min="0.1" max="10" step="0.01" />
      </div>
    </div>

    <div class="col-span-3">
      <label for="so_step_scale" class="block mb-1">Safety order step scale</label>
      <div class="flex">
        <input name="so-step-scale" type="range" class="block w-full mr-3" bind:value={$safety_order.step_scale} min="0.1" max="10" step="0.01" />
        <input type="number" bind:value={$safety_order.step_scale} min="0.1" max="5" step="0.01" />
      </div>
    </div>
  </div>

  <div>
    Bot info:
    <br />
    Max amount for bot usage: {round(last.total_margin)}$ ({round((last.total_margin / $balance) * 100)}%)
    <br />
    Max deal volume: {round(last.total_volume)}$
    <br />
    Leverage: {round($leverage)}
    <br />
    Max. safe order price deviation: {round(last.price_dev)}%

    <br />
    <br />
    <br />

    Recommended Min. Wallet balance:
    <br />
    Max amount for bot usage: {round(last.total_margin)}$
    <br />
    Wallet reserve: {round(-last.pnl)}$
    <br />
    Additional Reserve: {round($balance - last.total_margin + last.pnl)}$
    <br />
    Liquidation at price: {round(liquidated_at)}
    <br />
    Drop from entry: {-round(100 - (liquidated_at / entry_price) * 100)}%
    <br />
    Drop from last SO: {-round(100 - (liquidated_at / entry_price) * 100 + last.price_dev)}%
    <br />
  </div>
</div>

<br />
Reverse: <input type="checkbox" bind:checked={$reverse} />

<br />
<br />

{#each first_bad ? [active_order || first_bad] : [] as order}
  Order: {order.order}
  <br />

  {#each order.errors as error}
    {error}<br />
  {/each}
{/each}

<br />

<table>
  <thead>
    <tr>
      <th>Order #</th>
      <th>Price Dev.</th>
      <th>Avg. Price</th>
      <th>Required price / Profit</th>
      <th>Order Size (Margin)</th>
      <th>PnL</th>
      <th>Total Volume (Margin)</th>
    </tr>
  </thead>
  <tbody>
    {#each table as order}
      <tr
        class:liquidated={order.errors.length > 0}
        on:mouseenter={() => (active_order = order.errors.length > 0 ? order : undefined)}
        on:mouseleave={() => (active_order = undefined)}>
        <td>{order.order}</td>
        <td>
          {round(order.price_dev)}% (${round(order.price)})
        </td>
        <td>{-round((1 - order.avg_price / entry_price) * 100)}% (${round(order.avg_price)})</td>
        <td
          style="background-color: {order.errors.length > 0
            ? ''
            : perc_color((order.req_change - min_req_change) / (max_req_change - min_req_change), 0.3, range_colors)}"
          >{round(order.req_price)}$ ({round(order.req_change)}%) / +{round(order.tp)}$</td>
        <td>{round(order.volume)}$ (${round(order.margin)})</td>
        <td>{round(order.pnl)}$</td>
        <td>{round(order.total_volume)}$ ({round(order.total_margin)}$)</td>
      </tr>
    {/each}
  </tbody>
</table>
