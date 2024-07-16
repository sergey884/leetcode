/**
 * @param {number[][]} grid
 * @return {number}
 */
const matrixScore = (grid) => {
  const ROWS = grid.length;
  const COLS = grid[0].length;

  // flip rows
  for (let row = 0; row < ROWS; row++) {
    if (grid[row][0] === 0) {
      for (let col = 0; col < COLS; col++) {
        grid[row][col] = grid[row][col] ? 0 : 1;
      }
    }
  }

  //flip cols
  for (let col = 0; col < COLS; col++) {
    let oneCnt = 0;
    for (let row = 0; row < ROWS; row++) {
      oneCnt += grid[row][col];
    }

    if (oneCnt < ROWS - oneCnt) {
      for (let row = 0; row < ROWS; row++) {
        grid[row][col] = grid[row][col] ? 0 : 1;
      }
    }
  }

  let res = 0;
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      if (grid[row][col]) {
        res += 2 ** (COLS - col - 1);
      }
    }
  }

  return res;
};

const grid = [
  [0, 0, 1, 1],
  [1, 0, 1, 0],
  [1, 1, 0, 0]
];
console.log('matrixScore: ', matrixScore(grid));
