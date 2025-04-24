var name = "Daniel";
let age1 = 25;
const PI = 3.14;

/**
    Data Types
The main data types in JavaScript are:
    String: text, example "Hello, world!"
    Number: integers or decimals, example 42 or 3.14
    Boolean: logical values, true or false
    Undefined: value not assigned
    Null: null value (intentionally empty)
    Object: collection of key-value pairs, example { name: "John", age: 30 }
    Array: ordered list of values, example [1, 2, 3]
    Symbol: unique and immutable value (advanced)
 */

let text = "Example"; // String
let number = 10; // Number
let active = true; // Boolean
let undefined; // Undefined
let empty = null; // Null
let person = { name: "John", age: 20 }; // Object
let list = [1, 2, 3]; // Array

/**
 * Operators
Operators allow you to manipulate values and variables. The main ones are:
Arithmetic:
+ (addition), - (subtraction), * (multiplication), / (division),
% (remainder/modulus), ** (exponentiation)
 */

let sum = 2 + 3; // 5
let product = 4 * 5; // 20
let remainder = 10 % 3; // 1

/**
 * Control Structures: if, else and switch in JavaScript

The if structure allows you to execute a block of code if a condition
is true. The else can be used to execute another block if the condition
is false. You can also use else if to test multiple conditions.
 */

let age = 18;

if (age >= 18) {
  console.log("You are of legal age.");
} else {
  console.log("You are underage.");
}

// Else if
let grade = 7;

if (grade >= 7) {
  console.log("Approved");
} else if (grade >= 5) {
  console.log("Recovery");
} else {
  console.log("Failed");
}

/**
 * switch

The switch structure is useful when you need to compare a variable
with multiple possible values. Each value is called a "case". The break
command ends the execution of the block after finding the corresponding case.
 */

let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = "Sunday";
    break;
  case 2:
    dayName = "Monday";
    break;
  case 3:
    dayName = "Tuesday";
    break;
  case 4:
    dayName = "Wednesday";
    break;
  case 5:
    dayName = "Thursday";
    break;
  case 6:
    dayName = "Friday";
    break;
  case 7:
    dayName = "Saturday";
    break;
  default:
    dayName = "Invalid day";
}

console.log(dayName); // Tuesday
