/**
 * @param {number[][]} grid
 * @return {number}
 */
const islandPerimeter = (grid) => {
  const m = grid.length;
  const n = grid[0].length;

  let islands = 0;
  let neighbors = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        islands++;
        if (i + 1 < m && grid[i + 1][j] === 1) {
          neighbors++;
        }

        if (j + 1 < n && grid[i][j + 1] === 1) {
          neighbors++;
        }
      }
    }
  }

  return islands * 4 - neighbors * 2;
};


const grid = [
  [0, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0]
];
console.log('islandPerimeter: ', islandPerimeter(grid));
