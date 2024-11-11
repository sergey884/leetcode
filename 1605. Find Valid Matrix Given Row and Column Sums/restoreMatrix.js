/**
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */
const restoreMatrix = (rowSum, colSum) => {
  const ROWS = rowSum.length;
  const COLS = colSum.length;

  let r = 0;
  let c = 0;

  const originalMatrix = Array.from({ length: ROWS }, () => Array(COLS).fill(0));

  while (r < ROWS && c < COLS) {
    const minVal = Math.min(rowSum[r], colSum[c]);

    originalMatrix[r][c] = minVal;

    rowSum[r] -= minVal;
    colSum[c] -= minVal;

    if (colSum[c] === 0) {
      c++;
    } else {
      r++;
    }
  }

  return originalMatrix;
};

const rowSum = [5, 7, 10];
const colSum = [8, 6, 8];
console.log('restoreMatrix: ', restoreMatrix(rowSum, colSum))
