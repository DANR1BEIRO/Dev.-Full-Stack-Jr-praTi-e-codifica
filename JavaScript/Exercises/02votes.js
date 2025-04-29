/**
 * Escreva um algoritmo que:
 * 1. leia o número de eleitores
 * 2. leia o número de votos brancos
 * 3. leia o número de votos nulos
 * 4. leia o número de votos válidos
 * 5. calcule e escreva o percentual que cada um representa em relação ao total
 */

const TOTAL = 100;
let blankVotes = 20;
let nullVotes = 30;
let validVotes = 50;

function percentage1(total, quantity) {
  let percentage = (quantity / TOTAL) * 100;
  return (`Given the amount of ${total} voters, ${quantity} represent a percentage of ${percentage}% of votes.`);
}

console.log(percentage1(TOTAL, blankVotes));
console.log(percentage1(TOTAL, nullVotes));
console.log(percentage1(TOTAL, validVotes));

console.log("\n---------------------------------------\n");

let election = {
  total: 100,
  votes: {
    blank: 20,
    null: 30,
    valid: 50,
  },
};

const TYPES = {
  blank: "blank votes",
  null: "null votes",
  valid: "valid votes",
};

function percentage(quantity, type) {
  let percentage = (quantity / election.total) * 100;
  return `From the total of ${election.total} voters, ${quantity} ${TYPES[type]}, representing ${percentage}% of votes.`;
}

console.log(percentage(election.votes.blank, 'blank'));
console.log(percentage(election.votes.null, 'null'));
console.log(percentage(election.votes.valid, 'valid'));