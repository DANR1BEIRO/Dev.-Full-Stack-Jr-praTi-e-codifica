function factorial(n) {
    if (n < 0) {
        throw new Error("Negative numbers are not allowed.");
    }
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

const prompt = require('prompt-sync')();
const input = parseInt(prompt("Enter a number: "));

try {
    const result = factorial(input);
    console.log("Factorial:", result);
} catch (e) {
    console.log("Error:", e.message);
}
