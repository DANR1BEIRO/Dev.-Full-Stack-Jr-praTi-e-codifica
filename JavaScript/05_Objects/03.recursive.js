function factorial(number) {
    if (number === 0 || number === 1) {
        return 1;
    }
    return number * factorial(number - 1);
}

let number = 5;
let _factorial = factorial(number)
console.log(`The factorial of ${number} is ${_factorial}.`);

console.log("------------------------------------------");

function fibonacci(term) {
    if (term === 1) {
        return [0];
    } else if (term === 2) {
        return [0, 1];
    }

    let sequence = [0, 1];
    for (let i = 2; i < term; i++) {
        let next_term =
            sequence[sequence.length - 1] + sequence[sequence.length - 2];
        sequence.push(next_term);
    }
    return sequence;
}

let term = 1;
let fibo = fibonacci(term)
console.log(`The fibonacci sequence up to ${term} ${term > 1 ? "terms" : "term"} is: ${fibo.join(", ")}.`);
