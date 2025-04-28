let i = 1;
let number = 5;

console.log("while");
while (i <= number) {
  console.log(number + " x " + i + " = " + number * i);
  i++;
}

console.log("\nfor loop");
for (let i = 1; i <= 5; i++) {
  console.log(number + " x " + i + " = " + number * i);
}

let num = 1;
console.log("\ndo while");
do {
  console.log(num * number);
  num++;
} while (num <= number);
