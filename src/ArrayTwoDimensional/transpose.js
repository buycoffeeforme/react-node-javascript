// /Users/smshingare/Documents/React/react-node-javascript/src/ArrayTwoDimensional/transpose.js

// Since we're working in a Node.js environment without explicit ESM setup (no "type": "module" in package.json or .mjs files),
// we'll use require() instead of import.

const { calculateComplexity } = require('../Utils/spaceAndTime');

function transposeMatrix(matrix) {
    // Check if the matrix is empty or invalid
    if (!matrix || matrix.length === 0 || !matrix[0] || matrix.some(row => !Array.isArray(row))) {
        return [];
    }

    let rows = matrix.length;
    let cols = matrix[0].length;

    // Create a new matrix to store the transposed matrix
    let transposedMatrix = [];
    for (let j = 0; j < cols; j++) {
        transposedMatrix[j] = [];
        for (let i = 0; i < rows; i++) {
            transposedMatrix[j][i] = matrix[i][j];
        }
    }
    return transposedMatrix;
}

// Example Usage:
let matrix = [
    [1, 2, 3],
    [4, 5, 6]
];
console.log("Original Matrix:");
console.table(matrix);
const transposed = transposeMatrix(matrix);
console.log("Transposed Matrix:");
console.table(transposed);

// Testing the function (passing a matrix with one thousand rows)
const largeMatrix = [];
for(let i = 0; i < 1000; i++){
  largeMatrix[i] = [];
  for(let j = 0; j < 10; j++){
    largeMatrix[i][j] = Math.floor(Math.random() * 100);
  }
}

console.log("Complexity for transposeMatrix:");
console.log(calculateComplexity(transposeMatrix));
