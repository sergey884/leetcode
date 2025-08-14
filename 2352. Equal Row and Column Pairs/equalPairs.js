/**
 * @param {number[][]} grid
 * @return {number}
 */
const equalPairs = (grid) => {
  if (!grid) {
    return;
  }

  const n = grid.length;
  const rowCounter = new Map();

  for (let i = 0; i < n; i++) {
    const row = grid[i];
    const rowKey = row.join(',');
    rowCounter.set(rowKey, rowCounter.get(rowKey) + 1 || 1);
  }

  let count = 0;
  for (let r = 0; r < n; r++) {
    let col = [];
    for (let c = 0; c < n; c++) {
      col.push(grid[c][r]);
    }
    const colKey = col.join(',');
    count += rowCounter.get(colKey) || 0;
  }

  return count;
};

// const grid = [
//   [3, 1, 2, 2],
//   [1, 4, 4, 5],
//   [2, 4, 2, 2],
//   [2, 4, 2, 2]
// ];
const grid = [
  [11, 1],
  [1, 11]
];
console.log('equalPairs: ', equalPairs(grid)); // 8
