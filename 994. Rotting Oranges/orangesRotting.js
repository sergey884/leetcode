/**
 * @param {number[][]} grid
 * @return {number}
 */
const orangesRotting = (grid) => {
  const ROWS = grid.length;
  const COLS = grid[0].length;
  const queue = [];
  let freshOranges = 0;
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      if (grid[i][j] === 1) {
        freshOranges++;
      }
      if (grid[i][j] === 2) {
        queue.push([i, j]);
      }
    }
  }

  queue.push([-1, -1]);

  let minutesPassed = -1;
  while (queue.length) {
    const [row, col] = queue.shift();

    if (row === -1) {
      minutesPassed++;
      if (queue.length) {
        queue.push([-1, -1]);
      }
    } else {
      for (let d = 0; d < directions.length; d++) {
        const [dr, dc] = directions[d];
        const r = row + dr;
        const c = col + dc;
        if (r >= 0 && r < ROWS && c >= 0 && c < COLS) {
          if (grid[r][c] === 1) {
            grid[r][c] = 2;
            freshOranges--;
            queue.push([r, c]);
          }
        }
      }
    }
  }

  return freshOranges === 0 ? minutesPassed : -1;
};


const grid = [
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 1]
];
console.log('orangesRotting: ', orangesRotting(grid));