const minCost = (grid) => {
  const directions = {
    1: [0, 1],  // right
    2: [0, -1], // left
    3: [1, 0],  // down
    4: [-1, 0], // up
  };

  const ROWS = grid.length;
  const COLS = grid[0].length;
  const minCosts = Array.from({ length: ROWS }, () =>
    Array.from({ length: COLS }, () => Infinity)
  );
  minCosts[0][0] = 0;

  const q = [[0, 0, 0]]; // [row, col, cost]

  while (q.length) {
    const [row, col, cost] = q.shift();

    // Skip if we've found a better path to this cell
    if (cost > minCosts[row][col]) continue;

    for (let dir = 1; dir <= 4; dir++) {
      const [dr, dc] = directions[dir];
      const newRow = row + dr;
      const newCol = col + dc;
      const newCost = cost + (dir === grid[row][col] ? 0 : 1);

      if (
        newRow < 0 ||
        newRow >= ROWS ||
        newCol < 0 ||
        newCol >= COLS ||
        newCost >= minCosts[newRow][newCol]
      ) {
        continue;
      }

      minCosts[newRow][newCol] = newCost;

      // If the next cell's direction matches our movement direction,
      // prioritize this path by adding it to the front of the queue
      if (dir === grid[newRow][newCol]) {
        q.unshift([newRow, newCol, newCost]);
      } else {
        q.push([newRow, newCol, newCost]);
      }
    }
  }

  return minCosts[ROWS - 1][COLS - 1];
};




const grid = [
  [1, 1, 1, 1],
  [2, 2, 2, 2],
  [1, 1, 1, 1],
  [2, 2, 2, 2]
];
console.log('minCost: ', minCost(grid)); // 3
