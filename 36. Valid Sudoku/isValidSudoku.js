/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = (board) => {
  const rows = new Map();
  const cols = new Map();
  const squars = new Map();

  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      let num = board[row][col];
      if (num === '.') {
        continue;
      }

      if (!rows.has(row)) {
        rows.set(row, new Set());
      }

      if (!cols.has(col)) {
        cols.set(col, new Set());
      }

      let squareKey = `${Math.floor(row / 3)}-${Math.floor(col / 3)}`;

      if (!squars.has(squareKey)) {
        squars.set(squareKey, new Set());
      }

      let isInRows = rows.get(row).has(num);
      let isInCols = cols.get(col).has(num);
      let isInSquare = squars.get(squareKey).has(num);

      if (isInRows || isInCols || isInSquare) {
        return false;
      }

      rows.get(row).add(num)
      cols.get(col).add(num);
      squars.get(squareKey).add(num);
    }
  }
  
  return true;
};

const board = [
   ["5","3",".",".","7",".",".",".","."]
  ,["6",".",".","1","9","5",".",".","."]
  ,[".","9","8",".",".",".",".","6","."]
  ,["8",".",".",".","6",".",".",".","3"]
  ,["4",".",".","8",".","3",".",".","1"]
  ,["7",".",".",".","2",".",".",".","6"]
  ,[".","6",".",".",".",".","2","8","."]
  ,[".",".",".","4","1","9",".",".","5"]
  ,[".",".",".",".","8",".",".","7","9"]
];

console.log('isValidSudoku: ', isValidSudoku(board));
