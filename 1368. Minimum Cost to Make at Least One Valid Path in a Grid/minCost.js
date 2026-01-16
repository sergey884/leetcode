/**
 * @param {number[][]} grid
 * @return {number}
 */
const minCost = (grid) => {
  const directions = {
    1: [0, 1],
    2: [0, -1],
    3: [1, 0],
    4: [-1, 0],
  };

  const ROWS = grid.length;
  const COLS = grid[0].length;
  const minCosts = Array.from({ length: ROWS }, () => 
    Array.from({ length: COLS }, () => Infinity)
  );
  minCosts[0][0] = 0;

  const q = [[0, 0, 0]];

  while (q.length) {
    const [row, col, cost] = q.shift();
    if (row === ROWS - 1 && col === COLS - 1) {
      return cost;
    }

    if (cost > minCosts[row][col]) {
      continue;
    }

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

      if (dir === grid[row][col]) {
        q.unshift([newRow, newCol, newCost]);
      } else {
        q.push([newRow, newCol, newCost]);
      }
    }
  }

  return -1;
};


const grid = [
  [1, 1, 1, 1],
  [2, 2, 2, 2],
  [1, 1, 1, 1],
  [2, 2, 2, 2]
];
console.log('minCost: ', minCost(grid)); // 3
