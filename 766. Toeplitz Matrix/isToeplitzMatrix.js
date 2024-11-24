/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
const isToeplitzMatrix = (matrix) => {
  const ROWS = matrix.length;
  const COLS = matrix[0].length;
  const groupDiagonal = {};

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const groupId = `${r-c}`;
      if (groupDiagonal[groupId] === undefined) {
        groupDiagonal[groupId] = matrix[r][c];
      } else if (groupDiagonal[groupId] !== matrix[r][c]) {
        return false;
      }
    }
  }

  return true;
};

const matrix = [
  [1, 2, 3, 4],
  [5, 1, 2, 3],
  [9, 5, 1, 2]
];
console.log('isToeplitzMatrix: ', isToeplitzMatrix(matrix));
