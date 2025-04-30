/**
 * Write an algorithm to repeat reading a number while the
 * provided value is different from zero. For each number provided,
 * print whether it is positive or negative. If it's 0, the loop
 * should stop
 */

const prompt = require("prompt-sync")();

let number;

while (true) {
  number = Number(
    prompt("Enter a number to check if its positive or negative: ")
  );

  if (number === 0) {
    break;
  }
  console.log(
    number > 0 
    ? "It's a positive number!" 
    : "It's a negative number!"
  );
}
