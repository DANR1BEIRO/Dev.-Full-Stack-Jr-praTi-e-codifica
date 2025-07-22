// console.log("Goku vegeta".substring(1, 6));
// console.log("Goku vegeta".trim());
// console.log(Math.abs(-8.232323));

let date = new Date();

// console.log(date.getMonth() + 1);

// let Xmas95 = new Date("December 25, 1995 21:00:21");
// let month = Xmas95.getMonth(); // 0-11 (janeiro = 0)
// let day = Xmas95.getDate(); // 1-31
// let year = Xmas95.getFullYear(); // ano completo (ex: 1995)
// let hour = Xmas95.getHours(); // 0-23

// console.log(month); // 11 (dezembro)
// console.log(day); // 25
// console.log(year); // 1995
// console.log(hour); // 22
// console.log(Xmas95.toString());
// console.log(date.toString());

function dateFormated(date) {
    let day = date.getDate().toString().padStart(2, "0");
    let month = (date.getMonth() + 1).toString().padStart(2, "0");
    let year = date.getFullYear();
    let hour = `${date.getHours().toString().padStart(2, "0")}`;
    let minute = `${date.getMinutes().toString().padStart(2, "0")}`;
    let second = `${date.getSeconds().toString().padStart(2, "0")}`;
    let fullDate = `${day}/${month}/${year}`;
    let fullTime = `${hour}:${minute}:${second}`;

    return `Data: ${fullDate} \nHora: ${fullTime}`;
}

console.log(dateFormated(date));

function ramdomizer(number1, number2) {
    let min = Math.min(number1, number2);
    let max = Math.max(number1, number2);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(ramdomizer(15, 5));

function countVowels(str) {
    let vowels = str.match(/[aeiou]/gi);
    let total = vowels ? vowels.length : 0;

    if (total === 0) {
        return `A palavra ${str} não tem vogal`;
    }
    return `A palavra ${str} tem o total de ${total} vogais`;
}

console.log(countVowels("psst"));
