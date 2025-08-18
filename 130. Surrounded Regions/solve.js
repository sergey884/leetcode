/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solve = (board) => {
  if (!board) {
    return;
  }

  const ROWS = board.length;
  const COLS = board[0].length;

  const dfs = (r, c) => {
    if (r < 0 || c < 0 || r === ROWS || c === COLS || board[r][c] !== 'O') {
      return;
    }

    board[r][c] = '*';
    dfs(r - 1, c);
    dfs(r + 1, c);
    dfs(r, c - 1);
    dfs(r, c + 1);
  };

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if ((r === 0 || r === ROWS - 1 || c === 0 || c === COLS - 1) && board[r][c] === 'O') {
        dfs(r, c);
      }
    }
  }
    
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (board[r][c] === 'O') {
        board[r][c] = 'X';
      } else if (board[r][c] === '*') {
        board[r][c] = 'O';
      }
    }
  }
};


const board = [
  ["X", "X", "X", "X"],
  ["X", "O", "O", "X"],
  ["X", "X", "O", "X"],
  ["X", "O", "X", "X"]
];
console.log('solve: ', solve(board));
