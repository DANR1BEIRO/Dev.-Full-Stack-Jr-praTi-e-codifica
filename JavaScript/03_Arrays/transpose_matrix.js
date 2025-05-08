const matrix = [
    [1, 1, 1, 1],
    [2, 2, 2, 2],
    [3, 3, 3, 3],
    [4, 4, 4, 4],
];

function transpose_matrix(matrix) {
    let transpose = [];
    for (let i = 0; i < matrix[0].length; i++) {
        transpose[i] = [];
        for (let j = 0; j < matrix.length; j++) {
            transpose[i][j] = matrix[j][i];
        }
    }
    return transpose;
}

console.log("Original matrix:");
matrix.forEach((element) => {
    console.log(element);
});

console.log("\nTranspose matrix:");
transpose_matrix(matrix).forEach((element) => {
    console.log(element);
});
