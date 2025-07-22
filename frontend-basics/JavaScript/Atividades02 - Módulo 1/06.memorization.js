function memoize(fn) {
    const cache = {};
    return function (...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            return cache[key];
        }
        const result = fn.apply(this, args);
        cache[key] = result;
        return result;
    };
}


function slowSquare(n) {
    for (let i = 0; i < 1e8; i++) {}
    return n * n;
}

const memoizedSquare = memoize(slowSquare);

console.time("First call");
console.log(memoizedSquare(5)); 
console.tim
