let sensei = {
    name: "Kakashi Hatake",
    className: "Ninjutsu",
    grade: {
        naruto: [3, 3],
        sakura: [9, 9],
        sasuke: [10, 10],
    },
};

let studentAverage = {};
for (const student in sensei.grade) {
    let grades = sensei.grade[student];
    let average = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
    studentAverage[student] = average;
    console.log(`${student} : average: ${average}`);
}

let total = 0;
let count = 0;
for (const student in studentAverage) {
    total += studentAverage[student];
    count++;
}

let senseiAverage = total / count;
console.log(`Sensei's average: ${senseiAverage.toFixed(2)}`);
