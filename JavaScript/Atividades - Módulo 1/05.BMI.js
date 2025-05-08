const prompt = require("prompt-sync")();

function inputValidation(message) {
    while (true) {
        const input = prompt(message);
        const number = parseFloat(input);

        if (!isNaN(number) && number > 0) {
            return number;
        } else {
            console.log("Enter a valid number");
        }
    }
}

function getWeight() {
    const weight = inputValidation("weight: ");
    return weight;
}

function getHeight() {
    const height = inputValidation("height: ");
    return height;
}

function calculateBMI(weight, height) {
    const BMI = weight / (height * height);
    return BMI.toFixed(2);
}

function getBmiCategory(bmi) {
    const BMI_CATEGORY = {
        underweight: [0, 18],
        optimal: [18.1, 24.9],
        overweight: [25, 29.9],
        obese: [30, Infinity],
    };

    for (const [category, [min, max]] of Object.entries(BMI_CATEGORY)) {
        if (bmi >= min && bmi <= max) {
            return category;
        }
    }
}

function main() {
    const weight = getWeight();
    const height = getHeight();
    const BMI = calculateBMI(weight, height);
    const category = getBmiCategory(BMI);
    console.log(`Your BMI is ${BMI}. You're classified as ${category}`);
}

main();
