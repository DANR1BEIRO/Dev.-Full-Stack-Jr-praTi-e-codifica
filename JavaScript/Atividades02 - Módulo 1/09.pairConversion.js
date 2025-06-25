function pairsToObject(pairs) {
    return Object.fromEntries(pairs);
}

function objectToPairs(obj) {
    return Object.entries(obj);
}

const pairs = [["name", "Goku"], ["age", 30], ["country", "Japan"]];
const obj = pairsToObject(pairs);
console.log(obj);

const newPairs = objectToPairs(obj);
console.log(newPairs);
