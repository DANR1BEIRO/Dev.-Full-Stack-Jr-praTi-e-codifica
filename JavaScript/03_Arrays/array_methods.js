let array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

array.pop();
array;
console.log(array);

// Bubble sort
// for (let i = 0; i < array.length - 1; i++) {
//   for (let j = 0; j < array.length - i - 1; j++) {
//     console.log(j, array[j]);
//     if (array[j] > array[j + 1]) {
//       [array[j], array[j + 1]] = [array[j + 1], array[j]];
//     }
//   }
// }

console.log("teste");
const ordenarCrescente = array.slice().sort((a, b) => a - b); // spread operator
console.log(ordenarCrescente);
console.log(array);

const frutas = ["kiwi", "carambola"];
const doces = ["doce de kiwi", "doce de carambola"];

const comida = [...frutas, ...doces];
console.log(comida);

const pessoa = { nome: "goku", idade: "21" };
const contato = { telefone: "1234567" };

const usuario = { ...pessoa, ...contato };
console.log(usuario);

// const somaPares = array.reduce((acc, val) => {
//   return val % 2 === 0 ? acc + val : acc;
// }, 0);

// console.log(somaPares);

// const filtrarPares = array.filter((number) => number % 2 !== 0);
// console.log(filtrarPares);

// const resultado = array.reduce((acc, val, index) => {
//   return index % 2 === 0 ? acc + val : acc;
// }, 0);

// console.log(resultado);

// const soma = array.reduce((acc, cur) => acc + cur );
// console.log(soma);

// // atual = 10c
// // prox = 9
// // new prox = 8

// const nomes = ["akira", "Agoku", "goku", "Bakira"];

// const filtrarNomesA = nomes.filter((elemento) => elemento.startsWith("A"));
// console.log(filtrarNomesA);

// const comA = nomes.filter((nome) => nome.toUpperCase().startsWith("A"));
// console.log(comA);

let numbers = Array(10, 9, 8, 7, 6, 5, 4, 3, 2, 1);
let even = Array();
let sum = 0;
let average = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    if (numbers[i] % 2 === 0) {
        even.push(numbers[i]);
    }
}

average = sum / numbers.length;

console.log(numbers);
console.log(even);
console.log(sum);
console.log(average);

let array2 = [1, 2, 3];

for (let i = 0; i < array2.length; i++) {
    //console.log(i, array2[i]);
}

console.log(array2.length);

let numeros = [3, 2, 7, 19, 6, 4, 2, 10];

for (let idx = 0; idx < numeros.length - 1; idx++) {
    for (let index = 0; index < numeros.length - idx - 1; index++) {
        if (numeros[index] > numeros[index + 1]) {
            const temporaria = numeros[index];
            numeros[index] = numeros[index + 1];
            numeros[index + 1] = temporaria;
        }
    }
    console.log(numeros.join(" - "));
}

console.table(numeros);

let matriz = [];
let num = 1;

for (let i = 1; i < 11; i++) {
    matriz[i] = [];
    for (let j = 1; j < 11; j++) {
        matriz[i][j] = num;
        num++;
    }
}
console.table(matriz);

//        idx:    0         1         2
let matrix = [[1, 2, 3],[4, 5, 6],[7, 8, 9],
];

function transpose_matrix(matrix) {
    let transpose = []
    for (let i = 0; i < matrix[0].length; i++) { // column
        transpose[i] = []
        for (let j = 0; j < matrix.length; j++) {
            transpose[i][j] = matrix[j][i]
        }
    }
    return transpose;
}

transpose_matrix(matrix).forEach(element => { 
    console.log(element);
    
});
