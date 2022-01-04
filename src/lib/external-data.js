import { cached } from '$lib/local-cache.js';

const CACHE_TOKEN = 1; // used for invalidating old data on new release

function corsBridge(url) {
    return `https://immense-tundra-51381.herokuapp.com/?url=${encodeURI(url)}`
}

export function rules() {
    return cached('3c.cache.rules', 24 * 60 * 60, CACHE_TOKEN, () => {
        return fetch(corsBridge('https://www.binance.com/en/futures/trading-rules'))
            .then((r) => r.text())
            .then((body) => {
                const doc = document.createElement('html');
                doc.innerHTML = body;
                const raw_data = doc.querySelectorAll('#__APP_DATA')[0].innerText;
                const data = JSON.parse(raw_data);
                const pairs = data.pageData.redux.products.usdtFuturesProducts;
                return Array.from(pairs).map((r) => {
                    if (r.contractType != 'PERPETUAL') return;
                    if (r.status != 'TRADING') return;

                    const symbol = r.pair;
                    const coin = r.baseAsset;
                    const rules = r.filters.reduce((acc, f) => (acc[f.filterType] = f, acc), {});

                    return { symbol, coin, rules };
                });
            });
    });
}

export function brackets() {
    return cached('3c.cache.brackets', 24 * 60 * 60, CACHE_TOKEN, () => {
        return fetch(corsBridge('https://www.binance.com/bapi/futures/v1/friendly/future/common/brackets'), {
            headers: {
                'content-type': 'application/json'
            },
            body: '{}',
            method: 'POST'
        })
            .then((r) => r.json())
            .then((b) => {
                return b.data.brackets.map((b) => ({
                    symbol: b.symbol,
                    brackets: b.riskBrackets.map((rb) => ({
                        volume_cap: rb.bracketNotionalCap,
                        min_leverage: rb.minOpenPosLeverage,
                        max_leverage: rb.maxOpenPosLeverage
                    }))
                }));
            });
    });
}
