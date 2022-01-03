export function cached(key, expire, token, fn) {
    let cached = localStorage.getItem(key);
    if (cached != null) {
        let cache = JSON.parse(cached);
        if (Date.now() / 1000 - cache.date < expire || cache.token == token) {
            return Promise.resolve(cache.data);
        }
    }

    return fn().then((data) => {
        let date = Date.now() / 1000;
        localStorage.setItem(key, JSON.stringify({ date, token, data }));
        return data;
    });
}
