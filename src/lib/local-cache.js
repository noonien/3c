export function cached(key, expire, fn) {
    let cached = localStorage.getItem(key);
    if (cached != null) {
        let cache = JSON.parse(cached);
        if (Date.now() / 1000 - cache.date < expire) {
            return Promise.resolve(cache.data);
        }
    }

    return fn().then((res) => {
        localStorage.setItem(
            key,
            JSON.stringify({
                date: Date.now() / 1000,
                data: res
            })
        );
        return res;
    });
}
