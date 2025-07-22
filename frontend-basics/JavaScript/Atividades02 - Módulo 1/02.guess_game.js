
const prompt = require('prompt-sync')();
const secretNumber = Math.floor(Math.random() * 100) + 1;


let attempt;
let attempts = 0;

console.log("Gess game: ");
console.log("guess the number between 1 to 100: ");

while (true) {

    attempt = parseInt(prompt("Enter your guess: "));
    attempts++;

    if (isNaN(attempt) || attempt < 1 || attempt > 100) {
        console.log("Enter a valid number between 1 to 100");
        continue;
    }
    if (attempt < secretNumber) {
        console.log("Higher");
    } else if (attempt > secretNumber) {
        console.log("lower");
    } else {
        console.log(`You're guessed ${secretNumber} in ${attempts} attempts.`);
        break;
    }
}
