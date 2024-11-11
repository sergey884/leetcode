/**
 * @param {number} n
 * @return {string[][]}
 */
const solveNQueens = (n) => {
  const res = [];
  const board = Array(n).fill(null).map(() => Array(n).fill('.'));
  const diagonal = new Set();
  const antiDiagonal = new Set();
  const cols = new Set();

  const backtracking = (row) => {
    if (row === n) {
      res.push(board.map(row => row.join('')));
      return;
    }

    for (let col = 0; col < n; col++) {
      const currDiagonal = row - col;
      const currAntiDiagonal = row + col;

      if (cols.has(col) || diagonal.has(currDiagonal) || antiDiagonal.has(currAntiDiagonal)) {
        continue;
      }

      board[row][col] = 'Q';
      cols.add(col);
      diagonal.add(currDiagonal);
      antiDiagonal.add(currAntiDiagonal);

      backtracking(row + 1);

      board[row][col] = '.';
      cols.delete(col);
      diagonal.delete(currDiagonal);
      antiDiagonal.delete(currAntiDiagonal);
    }
  };

  backtracking(0);
  return res;
};


const n = 4;
console.log('solveNQueens: ', solveNQueens(n));
