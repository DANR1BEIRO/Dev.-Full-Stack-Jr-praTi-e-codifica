let prompt = require("prompt-sync")();

const GRADE_CLASSIFIER = {
  failed: [0, 3],
  retake: [4, 6],
  passed: [7, 10],
};

function getGradeCategory(grade) {
  for (const [key, value] of Object.entries(GRADE_CLASSIFIER)) {
    if (grade >= value[0] && grade <= value[1]) {
      return key === "retake"
        ? "You need to retake the exam!"
        : key === "failed"
        ? `I'm sorry! You ${key} the exam.`
        : `Great! You ${key} the exam!`;
    }
  }
}

while (true) {
  let grade = Number(prompt("Enter your grade: "));
  if (grade < 0 || grade > 10) {
    console.log("Invalid value! Grade must be between 0 and 10");
    continue;
  }

  if (typeof grade !== "number" || isNaN(grade)) {
    console.log("Only numbers between 0 and 10 are allowed");
    continue;
  }

  console.log(getGradeCategory(grade));
  break;
}
