/**
 * Write an algorithm that asks for a password and checks if it's valid.
 * If the user enters a wrong password, print "INVALID PASSWORD",
 * otherwise, print "ACCESS GRANTED". The correct password is 2807.
 */

const prompt = require("prompt-sync")();
const PASSWORD = 2807;
let attempts = 3;

while (attempts > 0) {
  let input = Number(prompt("Enter your password: "));

  if (input === PASSWORD) {
    console.log("ACCESS GRANTED");
    break;
  } else {
    attempts--;
    console.log(`INVALID PASSWORD! ${attempts} attempts remaining.`);
  }
}

if (attempts === 0) {
  console.log(`ACCESS DENIED! no attempts remaining.`);
}
