<script context="module">
export async function load({ fetch }) {
  const prices = await fetch('https://fapi.binance.com/fapi/v1/ticker/price').then((r) => r.json());

  return {
    props: {
      prices: prices.filter((p) => p.symbol.endsWith('USDT')).sort((a, b) => a.symbol.localeCompare(b.symbol))
    }
  };
}
</script>

<script>
import { writable } from 'svelte-local-storage-store';
import * as external from '$lib/external-data.js';
import { compute } from '$lib/calc-dca.js';
import { gradient } from '$lib/gradient.js';

export let prices;

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

let last_coin = '';
$: if ($coin != last_coin) {
  last_coin = $coin;
  entry_price = prices?.find((c) => c.symbol == $coin)?.price || 1;
}

let all_rules;
external.rules().then((r) => (all_rules = r));
$: rules = all_rules?.find((r) => r.symbol == $coin)?.rules;

let brackets;
external.brackets().then((b) => (brackets = b));
$: coin_brackets = brackets?.find((b) => b.symbol == $coin)?.brackets || [];
$: bracket = coin_brackets?.find((b) => b.min_leverage <= $leverage && $leverage <= b.max_leverage);
$: if ($leverage > coin_brackets[0]?.max_leverage) $leverage = coin_brackets[0]?.max_leverage;

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

$: table = compute(+$balance, +entry_price, rules, $base_order, $safety_order, +$take_profit, +$leverage, $long).map((o) => ({
  ...o,
  errors: order_errors(o)
}));
$: first_bad = table.find((o) => o.errors.length > 0);
$: last = table[table.length - 1];
$: liquidated_at = last.avg_price * (1 - $balance / last.total_volume);
$: max_req_change = table.reduce((max, order) => Math.max(order.req_change, max), $take_profit);

function round(num) {
  return num.toLocaleString(undefined, {
    maximumSignificantDigits: 5
  });
}

let req_price_gradient = [
  { perc: 0, color: { r: 0, g: 255, b: 0 } },
  { perc: 0.5, color: { r: 0, g: 255, b: 255 } },
  { perc: 1, color: { r: 0, g: 0, b: 255 } }
];

let active_order;
</script>

<style lang="postcss">
th,
td {
  @apply border border-gray-500 px-4;
}

.error {
  background-color: rgba(255, 0, 0, 0.4);
}
</style>


<div class="grid grid-cols-3 gap-8">
  <div class="col-span-2 grid grid-cols-3 gap-6">
    <div>
      <label for="balance" class="block mb-1">Wallet Balance</label>
      <div class="flex">
        <input type="number" name="balance" class="w-full" bind:value={$balance} step="10" />
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
        <input type="number" name="entry_price" class="w-full" bind:value={entry_price} />
        <span class="px-4 py-2 border border-l-0 border-gray-500 bg-gray-700"> {currency} </span>
      </div>
    </div>

    <div>
      <label for="bo_size" class="block mb-1">Base Order size</label>
      <div class="flex">
        <input type="number" name="bo_size" class="w-full" bind:value={$base_order.value} step="0.01" />
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
        <input type="number" name="so_size" class="w-full" bind:value={$safety_order.value} step="0.01" />
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
        <input type="number" name="take_profit" class="w-full" bind:value={$take_profit} min="0.05" max="50" step="0.01" />
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

    <div class="col-span-full grid grid-cols-2 gap-6">
      <div>
        <label for="price_deviation" class="block mb-1">Price deviation to open safety orders (%)</label>
        <div class="flex">
          <input name="price_deviation" type="range" class="block w-full mr-3" bind:value={$safety_order.price_dev} min="0.2" max="12" step="0.01" />
          <input type="number" class="!w-24" bind:value={$safety_order.price_dev} min="0.2" max="12" step="0.01" />
        </div>
      </div>

      <div>
        <label for="max_safety_trades" class="block mb-1">Max safety trades count</label>
        <div class="flex">
          <input name="max_safety_trades" type="range" class="block w-full mr-3" bind:value={$safety_order.count} min="0" max="100" />
          <input type="number" class="!w-24" bind:value={$safety_order.count} min="0" max="100" />
        </div>
      </div>

      <div>
        <label for="so_volume_scale" class="block mb-1">Safety order volume scale</label>
        <div class="flex">
          <input
            name="so_volume_scale"
            type="range"
            class="block w-full mr-3"
            bind:value={$safety_order.volume_scale}
            min="0.1"
            max="10"
            step="0.01" />
          <input type="number" class="!w-24" bind:value={$safety_order.volume_scale} min="0.1" max="10" step="0.01" />
        </div>
      </div>

      <div>
        <label for="leverage" class="block mb-1">Leverage</label>
        <div class="flex">
          <input name="leverage" type="range" class="block w-full mr-3" bind:value={$leverage} min="1" max={coin_brackets[0]?.max_leverage || 20} />
          <input type="number" class="!w-24" bind:value={$leverage} min="1" max={coin_brackets[0]?.max_leverage || 20} />
        </div>
      </div>
      <div>
        <label for="so_step_scale" class="block mb-1">Safety order step scale</label>
        <div class="flex">
          <input name="so-step-scale" type="range" class="block w-full mr-3" bind:value={$safety_order.step_scale} min="0.1" max="10" step="0.01" />
          <input type="number" class="!w-24" bind:value={$safety_order.step_scale} min="0.1" max="5" step="0.01" />
        </div>
      </div>
    </div>
  </div>

  <div>
    <header class="text-2xl text-bold">Usage</header>

    <div>
      <span>Max amount for bot usage:</span>
      <span class="font-bold">{round(last.total_margin)}$ ({round((last.total_margin / $balance) * 100)}%)</span>
    </div>

    <div>
      <span> Max deal volume:</span>
      <span class="font-bold">{round(last.total_volume)}$ </span>
    </div>
    <div>
      <span> Max. safe order price deviation:</span>
      <span class="font-bold">{round(last.price_dev)}% </span>
    </div>

    <header class="text-2xl text-bold mt-10">Stats</header>
    <div>
      <span>Wallet reserve:</span>
      <span class="font-bold">{round(-last.pnl)}$ </span>
    </div>
    <div>
      <span>Additional Reserve:</span>
      <span class="font-bold">{round($balance + last.pnl)}$ </span>
    </div>
    <div>
      <span>Liquidation at price:</span>
      <span class="font-bold">{round(liquidated_at)} </span>
    </div>
    <div>
      <span>Drop from entry:</span>
      <span class="font-bold">{-round(100 - (liquidated_at / entry_price) * 100)}% </span>
    </div>
    <div>
      <span>Drop from last SO:</span>
      <span class="font-bold">{-round(100 - (liquidated_at / entry_price) * 100 + last.price_dev)}% </span>
    </div>
    <div>
      <span>Min Required Change:</span>
      <span class="font-bold">{round($take_profit)}% </span>
    </div>
    <div>
      <span>Max Required Change:</span>
      <span class="font-bold">{round(max_req_change)}% </span>
    </div>
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
    {#each reverse ? table.reverse() : table as order}
      <tr
        class:error={order.errors.length > 0}
        on:mouseenter={() => (active_order = order.errors.length > 0 ? order : undefined)}
        on:mouseleave={() => (active_order = undefined)}>
        <td>{order.order}</td>
        <td>
          {round(order.price_dev)}% (${round(order.price)})
        </td>
        <td>{-round((1 - order.avg_price / entry_price) * 100)}% (${round(order.avg_price)})</td>
        <td
          style={order.errors.length > 0
            ? ''
            : 'background-color: ' + gradient((order.req_change - $take_profit) / (max_req_change - $take_profit), 0.3, req_price_gradient)}
          >{round(order.req_price)}$ ({round(order.req_change)}%) / +{round(order.tp)}$</td>
        <td>{round(order.volume)}$ (${round(order.margin)})</td>
        <td>{round(order.pnl)}$</td>
        <td>{round(order.total_volume)}$ ({round(order.total_margin)}$)</td>
      </tr>
    {/each}
  </tbody>
</table>
