function calc_size_vol(volume, price, step_size, min_buy) {
    const raw_size = volume / price;
    let size = Math.ceil(raw_size / step_size) * step_size;
    size = Math.max(min_buy, size);
    volume *= size / raw_size;
    return [size, volume];
}

export function compute(balance, entry_price, rules, base_order, safety_order, take_profit, leverage, long) {
    let bo_vol = base_order.value;
    if (base_order.type == '%') {
        bo_vol = (balance * base_order.value) / 100;
    }

    let so_vol = safety_order.value;
    if (safety_order.type == '%') {
        so_vol = (balance * safety_order.value) / 100;
    }

    let table = [];

    const step_size = +rules?.LOT_SIZE?.stepSize || 1e-6;
    const min_buy = +rules?.LOT_SIZE?.minQty || 1e-6;

    let price_dev = 0;
    let avg_price = entry_price;
    let [total_size, total_volume] = calc_size_vol(bo_vol, entry_price, step_size, min_buy);
    table.push({
        order: 'BO',
        price_dev: 0,
        price: entry_price,
        avg_price,
        size: total_size,
        margin: total_volume / leverage,
        volume: bo_vol,
        req_price: entry_price * (1 + take_profit / 100),
        req_change: take_profit,
        pnl: 0,
        tp: (total_volume * take_profit) / 100,
        total_size,
        total_volume,
        total_margin: total_volume / leverage
    });

    for (let i = 0; i < safety_order.count; i++) {
        price_dev = price_dev * safety_order.step_scale - safety_order.price_dev;
        const price = entry_price * (1 + price_dev / 100);
        const raw_volume = so_vol * Math.pow(safety_order.volume_scale, i);
        const [size, volume] = calc_size_vol(raw_volume, price, step_size, min_buy);
        const margin = volume / leverage;
        total_volume += volume;
        total_size += size;
        avg_price = total_volume / total_size;
        const total_margin = total_volume / leverage;
        const req_price = avg_price * (1 + take_profit / 100);
        const req_change = (req_price / price - 1) * 100;
        const pnl = -(1 - price / avg_price) * total_volume;

        table.push({
            order: `${i + 1}`,
            price_dev,
            price,
            avg_price,
            size,
            margin: volume / leverage,
            volume,
            req_price,
            req_change,
            tp: (total_volume * take_profit) / 100,
            pnl,
            total_size,
            total_volume,
            total_margin
        });
    }

    return table;
}
