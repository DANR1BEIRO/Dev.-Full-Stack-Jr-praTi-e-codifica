const prompt = require("prompt-sync")();

function fibonacci(message) {
    let term;
    while (true) {
        let userInput = prompt(message);
        term = Number(userInput);

        if (!isNaN(term) && term > 0 && Number.isInteger(term)) {
            break;
        }
        console.log("Invalid input! enter a positive number");
    }

    if (term === 1) {
        return [0];
    }

    if (term === 2) {
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

function main() {
    let fibo = fibonacci("Enter the fibonacci term: ");
    console.log(
        `The fibonacci sequence up to ${fibo.length} is ${
            fibo.join(", ") + "."
        }`
    );
}

main();

