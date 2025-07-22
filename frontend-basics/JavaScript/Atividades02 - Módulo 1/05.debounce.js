function debounce(fn, delay) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn.apply(this, args), delay);
    };
}

function sayHello() {
    console.log("Hello!");
}

const debouncedHello = debounce(sayHello, 1000);

debouncedHello();
debouncedHello();
debouncedHello();

