/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const setZeroes = (matrix) => {
  const ROWS = matrix.length;
  const COLS = matrix[0].length;
  let firstRowHasZero = false;
  let firstColHasZero = false;

  for (let r = 0; r < ROWS; r++) {
    if (matrix[r][0] === 0) {
      firstColHasZero = true;
      break;
    }
  }
  
  for (let c = 0; c < COLS; c++) {
    if (matrix[0][c] === 0) {
      firstRowHasZero = true;
      break;
    }
  }

  for (let r = 1; r < ROWS; r++) {
    for (let c = 1; c < COLS; c++) {
      if (matrix[r][c] === 0) {
        matrix[0][c] = 0;
        matrix[r][0] = 0;
      }
    }
  }

  for (let r = 1; r < ROWS; r++) {
    for (let c = 1; c < COLS; c++) {
      if (matrix[0][c] === 0 || matrix[r][0] === 0) {
        matrix[r][c] = 0;
      }
    }
  }

  if (firstColHasZero) {
    for (let r = 0; r < ROWS; r++) {
      matrix[r][0] = 0;
    }
  }

  if (firstRowHasZero) {
    for (let c = 0; c < COLS; c++) {
      matrix[0][c] = 0;
    }
  }
};


const matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1]
];
console.log('setZeroes: ', setZeroes(matrix));
