const prompt = require("prompt-sync")();

function getValidationNumber(message) {
    while (true) {
        const input = prompt(message);
        const number = Number(input);

        if (!isNaN(number) && Number.isInteger(number)) {
            return number;
        }
        console.log("Must be an integer number");
    }
}

function getMultiplyTable() {
    const userInput = getValidationNumber("Enter a number: ");

    for (let i = 1; i <= 10; i++) {
        const product = userInput * i;
        console.log(`${i} x ${userInput} = ${product}`);
    }
}

getMultiplyTable();
