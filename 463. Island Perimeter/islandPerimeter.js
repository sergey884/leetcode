/**
 * @param {number[][]} grid
 * @return {number}
 */
const islandPerimeter = (grid) => {
  const visited = new Set();
  const dfs = (i, j) => {
    if (i >= grid.length || j >= grid[0].length || i < 0 || j < 0 || grid[i][j] === 0) {
      return 1;
    }

    const visitedCellKey = `${i}-${j}`;
    if (visited.has(visitedCellKey)) {
      return 0;
    }

    visited.add(visitedCellKey);

    let perim = dfs(i, j + 1);
    perim += dfs(i + 1, j);
    perim += dfs(i, j - 1);
    perim += dfs(i - 1, j);

    return perim;
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        return dfs(i, j);
      }
    }
  }
};


const grid = [
  [0, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0]
];
console.log('islandPerimeter: ', islandPerimeter(grid));
