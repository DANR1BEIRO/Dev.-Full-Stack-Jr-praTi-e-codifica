const prompt = require("prompt-sync")();

function getValidInput(message) {
    while (true) {
        const input = prompt(message);
        const number = Number(input);

        if (!isNaN(number)) {
            return number;
        }
        console.log("Only numbers are allowed");
    }
}

function getInput() {
    let arr = [];
    for (let i = 1; i < 6; i++) {
        const getInput = getValidInput(`Enter the number ${i}: `);
        arr.push(getInput);
    }
    return arr;
}

function sumArray(arr) {
    // let sum = 0;
    // for (let i = 0; i < arr.length; i++) {
    //     sum += arr[i];
    // }
    // return sum;
    return arr.reduce((acc, cur) => acc + cur);
}

function main() {
    const userInput = getInput();
    const userSum = sumArray(userInput);

    console.log(`The sum of user's inputs is: ${userSum}`);
}

main();
