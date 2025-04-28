let grade1 = 10;
let grade2 = 20;
let average = (grade1 + grade2) / 2;

const prompt = require("prompt-sync")();

console.log("1 - Check the average\n2 - Check results");
let option = Number(prompt("Select one option to check: "));

switch (option) {
  case 1:
    console.log("The avarage is " + average);
    break;
  case 2:
    if (average >= 50) {
      console.log("You've passed the exam");
    } else {
      console.log("You've failed the exam");
    }
    break;
  default:
    console.log("Invalid option!");
}
