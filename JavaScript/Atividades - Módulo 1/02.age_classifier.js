const prompt = require("prompt-sync")();

const AGE_CLASSIFIER = {
  child: [0, 12],
  teenager: [13, 17],
  adult: [18, 59],
  senior: [60, 150],
};

function getAgeCategory(age) {
  /**
   * Object.entries(obj) returns an array of arrays, where each sub array contains
   * two elements: key and value
   */
  for (const [key, value] of Object.entries(AGE_CLASSIFIER)) {
    if (age >= value[0] && age <= value[1]) {
      return key === "adult" ? `You're an adult` : `You're a ${key}`;
    }
  }
}

while (true) {
  let age = Number(prompt("Enter your age: "));

  if (age < 0 || age > 150) {
    console.log("Enter a valid age (between 0 and 150).");
    continue;
  }

  if (typeof age !== "number" || isNaN(age)) {
    console.log("Only numbers are allowed for age");
    continue;
  }

  console.log(getAgeCategory(age));
  break;
}
