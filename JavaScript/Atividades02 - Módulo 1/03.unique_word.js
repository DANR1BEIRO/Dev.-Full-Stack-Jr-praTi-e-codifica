const prompt = require('prompt-sync')();

const sentence = prompt("Enter a sentence: ");
const words = sentence.split(" ");
let uniqueWords = [];

for (let i = 0; i < words.length; i++) {
    let found = false;

    for (let j = 0; j < i; j++) {
        if (words[j] === words[i]) {
            found = true;
            break;
        }
    }

    if (!found) {
        uniqueWords.push(words[i]);
    }
}

console.log("Unique words:");
console.log(uniqueWords);
