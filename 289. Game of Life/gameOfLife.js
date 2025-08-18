/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const gameOfLife = (board) => {
  // Original | New | State
  //     0    |  0  |   0
  //     1    |  0  |   1
  //     0    |  1  |   2
  //     1    |  1  |   3
  const ROWS = board.length;
  const COLS = board[0].length;

  const calculate = (r, c) => {
    let cnt = 0;
    const directions = [
      [0, 1], [0, -1], [1, 0], [-1, 0],
      [-1, -1], [1, -1], [-1, 1], [1, 1]
    ];

    for (let i = 0; i < directions.length; i++) {
      const [x, y] = directions[i];
      if (r + x < 0 || r + x >= ROWS || c + y < 0 || c + y >= COLS) {
        continue;
      }
      if (board[r + x][c + y] === 1 || board[r + x][c + y] === 3 ) {
        cnt++;
      }
    }

    return cnt;
  };

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      amountOfLiveCells = calculate(r, c);
      if (board[r][c]) {
        if (amountOfLiveCells === 2 || amountOfLiveCells === 3) {
          board[r][c] = 3;
        }
      } else {
        if (amountOfLiveCells === 3) {
          board[r][c] = 2;
        }
      }
    }
  }

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (board[r][c] === 2 || board[r][c] === 3) {
        board[r][c] = 1;
      } else if (board[r][c] === 1) {
        board[r][c] = 0;
      }
    }
  }

  return board;
};


const board = [
  [0, 1, 0],
  [0, 0, 1],
  [1, 1, 1],
  [0, 0, 0]
];
console.log('gameOfLife: ', gameOfLife(board))
