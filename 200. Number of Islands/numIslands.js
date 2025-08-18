/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = (grid) => {
  const ROWS = grid.length;
  const COLS = grid[0].length;
  const visited = new Set();
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  const bfs = (row, col) => {
    const queue = [[row, col]];
    visited.add(`${row}-${col}`);

    while (queue.length) {
      const [row, col] = queue.pop();

      for (let i = 0; i < directions.length; i++) {
        const [dr, dc] = directions[i];
        const r = row + dr;
        const c = col + dc;

        if (
          r >= 0 &&
          r < ROWS &&
          c >= 0 &&
          c < COLS &&
          grid[r][c] === "1" &&
          !visited.has(`${r}-${c}`)
        ) {
          queue.push([r, c]);
          visited.add(`${r}-${c}`);
        }
      }
    }
  };

  let islands = 0;
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (grid[r][c] === "1" && !visited.has(`${r}-${c}`)) {
        bfs(r, c);
        islands++;
      }
    }
  }

  return islands;
};


const grid = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];
console.log("numIslands: ", numIslands(grid));
