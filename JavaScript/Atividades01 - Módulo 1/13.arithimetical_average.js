const prompt = require("prompt-sync")();

function getValidation(message) {
    while (true) {
        const input = prompt(message);

        if (input === null || input.trim() === "") {
            console.log("Input can't be empty");
            continue;
        }
        const number = Number(input);
        if (!isNaN(number)) {
            return number;
        }
        console.log("Only numbers are allowed");
    }
}

function getDecimalNumber() {
    let counter = 0;
    let sum = 0;
    let average = 0;

    while (true) {
        const input = getValidation(`Enter the number ${counter + 1} (0 to finish): `);

        if (input === 0) {
            if (counter === 0) {
                console.log("No numbers were entered");
                return 0;
            }
            console.log(`Final average: ${average.toFixed(2)}`);
            return average;
        }

        counter += 1;
        sum += input;
        average = sum / counter;
    }
}

getDecimalNumber();
