/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const luckyNumbers  = (matrix) => {
  if (!matrix.length) {
    return null;
  }

  const ROWS = matrix.length;
  const COLS = matrix[0].length;

  const res = [];
  const maxInRows = new Set();
  for (let r = 0; r < ROWS; r++) {
    maxInRows.add(Math.min(...matrix[r]));
  }

  const minInCols = new Set(); 
  for (let c = 0; c < COLS; c++) {
    let currMax = matrix[0][c];
    for (let r = 0; r < ROWS; r++) {
      currMax = Math.max(currMax, matrix[r][c]);
    }
    minInCols.add(currMax);
  }

  for (let n of maxInRows) {
    if (minInCols.has(n)) {
      res.push(n);
    }
  }

  return res;
};


const matrix = [
  [3, 7, 8],
  [9, 11, 13],
  [15, 16, 17]
];
console.log('luckyNumbers: ', luckyNumbers(matrix));
