const prompt = require("prompt-sync")();

function getValidation(message) {
    while (true) {
        const input = prompt(message);

        if (input === null || input.trim() === "") {
            console.log("Input can't be empty");
            continue;
        }
        const number = Number(input);

        if (isNaN(number)) {
            console.log("Enter a valid number");
            continue;
        }

        if (number < 0) {
            console.log("Must be a positive number");
            continue;
        }

        if (!Number.isInteger(number)) {
            console.log("Must be an integer number");
            continue;
        }
        return number;
    }
}

function factorial(number) {
    if (number === 0 || number === 1) {
        return 1;
    }
    return number * factorial(number - 1);
}

function main() {
    const number = getValidation("Enter a number to calculate it's factorial: ");
    return `The factorial of ${number} is ${factorial(number)}.`;
}

console.log(main());
