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
  let maxOfRowMins = -Infinity;

  for (let r = 0; r < ROWS; r++) {
    const minInRow = Math.min(...matrix[r]);
    maxOfRowMins = Math.max(maxOfRowMins, minInRow);
  }

  for (let c = 0; c < COLS; c++) {
    let currMin = matrix[0][c];
    for (let r = 0; r < ROWS; r++) {
      currMin = Math.max(currMin, matrix[r][c]);
    }
    if (maxOfRowMins === currMin) {
      return [maxOfRowMins];
    }
  }

  return [];
};


const matrix = [
  [3, 7, 8],
  [9, 11, 13],
  [15, 16, 17]
];
console.log('luckyNumbers: ', luckyNumbers(matrix));
