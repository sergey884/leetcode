/**
 * @param {number[][]} grid
 * @return {number}
 */
const getMaximumGold = (grid) => {
  const ROWS = grid.length;
  const COLS = grid[0].length;

  const dfs = (i, j) => {
    if (i < 0 || j < 0 || i >= ROWS || j >= COLS) {
      return 0;
    }

    if (grid[i][j] === 0) {
      return 0;
    }

    let gold = grid[i][j];
    grid[i][j] = 0;

    const up = dfs(i + 1, j);
    const down = dfs(i - 1, j);
    const left = dfs(i, j - 1);
    const right = dfs(i, j + 1);

    const maxPath = Math.max(up, down, left, right);

    grid[i][j] = gold;

    return gold + maxPath;
  }

  let max = 0;
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      max = Math.max(dfs(i, j), max);
    }
  }

  return max;
};


const grid = [
  [0, 6, 0],
  [5, 8, 7],
  [0, 9, 0]
];
console.log('getMaximumGold: ', getMaximumGold(grid));
