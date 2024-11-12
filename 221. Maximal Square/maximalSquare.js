/**
 * @param {character[][]} matrix
 * @return {number}
 */
const maximalSquare = (matrix) => {
  const ROWS = matrix.length;
  const COLS = matrix[0].length;
  const cache = {};

  const helper = (row, col) => {
    if (row >= ROWS || col >= COLS) {
      return 0;
    }

    const cacheKey = `${row}-${col}`;
    if (!cache[cacheKey]) {
      let down = helper(row + 1, col);
      let right = helper(row, col + 1);
      let diag = helper(row + 1, col + 1);

      cache[cacheKey] = 0;
      if (matrix[row][col] === '1') {
        cache[cacheKey] = 1 + Math.min(down, right, diag);
      }
    }

    return cache[cacheKey];
  }

  helper(0, 0);

  return Math.max(...Object.values(cache)) ** 2;
};


const matrix = [
  ["1", "0", "1", "0", "0"],
  ["1", "0", "1", "1", "1"],
  ["1", "1", "1", "1", "1"],
  ["1", "0", "0", "1", "0"]
];
console.log('maximalSquare: ', maximalSquare(matrix))