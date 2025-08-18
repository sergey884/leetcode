/**
 * @param {number[][]} grid
 * @return {number}
 */
const shortestPathBinaryMatrix = (grid) => {
  const ROWS = grid.length;
  const COLS = grid[0].length;
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
    [1, -1],
    [-1, 1],
    [1, 1],
    [-1, -1],
  ];

  if (grid[0][0] === 1 || grid[ROWS - 1][COLS - 1] === 1) {
    return -1;
  }

  const queue = [[0, 0]];
  grid[0][0] = 1;

  while (queue.length) {
    const [r, c] = queue.shift();

    if (r === ROWS - 1 && c === COLS - 1) {
      return grid[r][c];
    }

    for (let i = 0; i < directions.length; i++) {
      const [dr, dc] = directions[i];
      const row = r + dr;
      const col = c + dc;
      if (
        row >= 0 &&
        row < ROWS &&
        col >= 0 &&
        col <= COLS &&
        grid[row][col] === 0
      ) {
        queue.push([row, col]);
        grid[row][col] = grid[r][c] + 1;
      }
    }
  }

  return -1;
};


const grid = [
  [0,0,0],
  [1,1,0],
  [1,1,0]
];
console.log('shortestPathBinaryMatrix: ', shortestPathBinaryMatrix(grid));
