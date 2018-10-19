/*
Multiplication Table Matrix
Write a function which generates a multiplication table as a matrix (2D array), based on an array of factors.

Example:

Factors:

[0, 1, 2]

Output:

[[0, 0, 0],

[0, 1, 2],

[0, 2, 4]]

Examples
Input	Output
factors:
[ 1, 2 ]	[ [ 1, 2 ], [ 2, 4 ] ]
factors:
[ 0, 1, 2 ]	[ [ 0, 0, 0 ], [ 0, 1, 2 ], [ 0, 2, 4 ] ]
factors:
[ -1 ]	[ [ 1 ] ]
*/

function multiplicationMatrix (factors) {
  let matrix = [];
  for(let i = 0; i < factors.length; i++ ){
    let subMatrix = [];
    for(let j = 0; j < factors.length; j++){
      subMatrix.push(factors[i] * factors[j]);  
    }
    matrix.push(subMatrix);
  }
  return matrix;
}
