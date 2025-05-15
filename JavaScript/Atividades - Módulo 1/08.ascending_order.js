const prompt = require("prompt-sync")();

function getValidInput(message) {
    while (true) {
        const input = prompt(message);
        const number = Number(input);

        if (!isNaN(number) && Number.isInteger(number)) {
            return number;
        }
        console.log("Only integer number are allowed");
    }
}

function getFirstNumber() {
    const firstNumber = getValidInput("Enter the first number: ");
    return firstNumber;
}

function getSecondNumber(firstNumber) {
    while (true) {
        const secondNumber = getValidInput("Enter the second number: ");
        if (secondNumber !== firstNumber) {
            return secondNumber;
        }
        console.log("The numbers can't be equals");
    }
}

function getSortedNumber(firstNumber, secondNumber) {
    const sortedNumber = [firstNumber, secondNumber].sort((a, b) => a - b);
    return { smallerNumber: sortedNumber[0], largestNumber: sortedNumber[1] };
}

function main() {
    while (true) {
        const number1 = getFirstNumber();
        const number2 = getSecondNumber(number1);
        const { smallerNumber, largestNumber } = getSortedNumber(number1, number2);

        console.log(
            `Values in ascending order: ${smallerNumber}, ${largestNumber}`
        );
        break;
    }
}

main();
