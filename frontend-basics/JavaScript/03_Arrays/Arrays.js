// Array literal:

let fruits = ["apple", "Banana", "Orange"];
let num = [1, 2, 3, 4, 5];
let mixed = [1, "tetsuo", true, null, { name: "Goku" }];
let empty = [];

// Array() Constructor:

let colors = new Array("Red", "Green", "Blue");
let primeNumbers = new Array(2, 3, 5, 7, 11);
/**
 * Be careful: New Array(5) creates an empty array with 5
 * undefined slots, not an array containing the single element 5.
 */
let definedSize = new Array(3); // creates [empty x 3]

// Accessing elements:
console.log(fruits[0]); // Output: apple
console.log(fruits[1]); // Output: Banana
console.log(fruits[2]); // Output: Orange
console.log(fruits[3]); // Output: undefined (index out of bound)

// Modifying an element:
fruits[1] = "Strawberry";
console.log(fruits); // Output: [ 'apple', 'Strawberry', 'Orange' ]

// Length property:

let animals = ["Dog", "Cat", "Bird"];
console.log(animals.length); // Output: 3

// Common Methods

let numbers = [10, 20, 30];

numbers.push(40);
console.log(numbers); // numbers is now [10, 20, 30, 40]

let last = numbers.pop(); // Lats is 40, numbers is now [10, 20, 30]
console.log(last); // 40
console.log(numbers); // Output: [10, 20, 30]

numbers.unshift(5); // numbers is now [5, 10, 20, 30]
console.log(numbers); // Output: [5, 10, 20, 30]

numbers.forEach(function (element, index) {
  console.log(`Index ${index}: element ${element}`);
});

// Output:
// Index 0: 5
// Index 1: 10
// Index 2: 20
// Index 3: 30

/**
 * Arguments Provided by forEach:
 * When forEach calls your callback function for each item in the array,
 * it always provides arguments in this specific order:
 *
 * Argument 1: The Current Element: The value of the array element being
 * processed in the current iteration
 * .
 * Argument 2: The Current Index: The index (position) of the current element
 *  within the array.
 *
 * Argument 3 (Optional): The Array Itself: The original
 * array that forEach was called upon.
 */

// Multidimensional Arrays

// A 2D array (3x3 matrix)
// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// An array with different inner lengths
let ticTacToeBoard = [
  ["X", "O", "X"],
  ["O", "X", "O"],
  ["O", "O", "X"],
];

let mixedData = [
  ["name", "age"],
  ["tetsuo", 20],
  ["kaneda", 19],
];

let matrix = [
  [1, 2, 3], // row 0
  [4, 5, 6], // row 1
  [7, 8, 9], // row 2
];

console.log(matrix[0][0]); // Output: 1 (row 0, column 0)
console.log(matrix[1][2]); // Output: 6 (row 1, column 2)
console.log(matrix[2][1]); // Output: 8 (row 2, column 1)

// Modifying an element

matrix[0][0] = 100;
console.log(matrix[0][0]); // Output: 100
console.log(matrix); // Output: [ [ 100, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]

// Using traditional for loops
console.log("Using for:");
for (let i = 0; i < matrix.length; i++) { // iterate over rows
  for (let j = 0; j < matrix[i].length; j++) { // iterate over columns in the current row
    console.log(`Element [${i}][${j}]: ${matrix[i][j]}`);
  }
}

// Using forEach (more functional style)
console.log("using foEach:");
matrix.forEach(function (row, rowIndex) {
  row.forEach(function (column, colIndex) {
    console.log(`Element [${rowIndex}][${colIndex}] : ${column}`);
  });
});

// Element [0][0]: 100
// Element [0][1]: 2
// Element [0][2]: 3
// Element [1][0]: 4
// Element [1][1]: 5
// Element [1][2]: 6
// Element [2][0]: 7
// Element [2][1]: 8
// Element [2][2]: 9




