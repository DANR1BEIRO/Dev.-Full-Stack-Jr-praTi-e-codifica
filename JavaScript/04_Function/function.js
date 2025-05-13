let listOfThings = {
    hardware: ["cpu", "gpu"],
    movies: {
        horror: ["chucky", "panic"],
    },
};
// listOfThings["hardware"] = Array("cpu", "gpu");
// listOfThings["movies"] = Array("LOTR", "Harry Potter")

let horror = listOfThings["movies"]["horror"];
console.log("horror2: " + horror.join(", ") + ".");
// console.table(listOfThings);
// console.log(Object.keys(listOfThings));
// console.log(Object.values(listOfThings));
// console.log(Object.values(listOfThings.hardware));

function sorter(arr) {
    return arr.sort((a, b) => a - b);
}

console.log(sorter([4, 5, 2]));

//
let arr = ["daniel", "goku", "android18", "bulma"];

console.log(arr.sort((a, b) => a.localeCompare(b)));

function greeting(name, callback) {
    console.log(`Hello, ${name}!`);
    callback(); // Executes the callback afterwards
}

greeting("John", function () {
    console.log("Callback executed after greeting.");
});

function sum(arr) {
    return arr.reduce((acc, cur) => acc + cur, 0);
}

console.log(sum([1, 2, 3]));

function largest(arr) {
    let largest = arr[0];
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

console.log(largest([2, 4]));

function largest2(arr) {
    return Math.max(...arr);
}

console.log(largest2([2, 4]));

function reverseNumber(number) {
    let isNegative = number < 0,
        numberStr = String(Math.abs(number)),
        reversedStr = "";

    for (let i = numberStr.length - 1; i >= 0; i--) {
        reversedStr += numberStr[i];
    }

    number = Number(reversedStr);
    if (isNegative) number *= -1;

    return number;
}

console.log(reverseNumber(-2991));
