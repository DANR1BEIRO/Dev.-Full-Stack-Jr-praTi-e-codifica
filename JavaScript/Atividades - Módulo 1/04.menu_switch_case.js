const prompt = require("prompt-sync")();

function menu_switch(option) {
  switch (option) {
    case 1:
      return "You chose option 1";
    case 2:
      return "You chose option 2";
    case 3:
      return "You chose option 3";
    default:
      return "Invalid option";
  }
}

while (true) {
  console.log("[1] one\n[2] two\n[3] three");

  let userInput = Number(prompt("Select an option: "));

  if (userInput < 1 || userInput > 3) {
    console.log("Invalid option! Please select an available option.");
    continue;
  }

  if (!Number.isInteger(userInput) || isNaN(userInput)) {
    console.log("The option must be a number!");
    continue;
  }

  console.log(menu_switch(userInput));
  break;
}
