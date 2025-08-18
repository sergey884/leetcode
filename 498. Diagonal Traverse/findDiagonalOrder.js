/**
 * @param {number[][]} mat
 * @return {number[]}
 */
const findDiagonalOrder = (mat) => {
  let direction = 1;
  const res = [];
  const N = mat.length;
  const M = mat[0].length;

  let row = 0;
  let col = 0;

  while (row < N && col < M) {
    res.push(mat[row][col]);

    let newRow = row + (direction ? -1 : 1);
    let newCol = col + (direction ? 1 : -1);

    if (newRow < 0 || newRow === N || newCol < 0 || newCol === M) {
      if (direction) {
        if (col === M - 1) {
          row++;
        } else {
          col++;
        }
      } else {
        if (row === N - 1) {
          col++;
        } else {
          row++;
        }
      }
      direction = 1 - direction;
    } else {
      row = newRow;
      col = newCol
    }
  }

  return res;
};


const mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log('findDiagonalOrder: ', findDiagonalOrder(mat));
