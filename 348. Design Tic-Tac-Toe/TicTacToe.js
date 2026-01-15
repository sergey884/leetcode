class TicTacToe {
  constructor(n) {
    this.rows = Array(n).fill(0);
    this.cols = Array(n).fill(0);
    this.diag = 0;
    this.antiDiag = 0;
    this.n = n;
  }

  move(row, col, player) {
    const toAdd = player === 1 ? 1 : -1;
    const target = player === 1 ? this.n : -this.n;

    this.rows[row] += toAdd;
    this.cols[col] += toAdd;

    if (row === col) {
      this.diag += toAdd;
    }

    if (row + col === this.n) {
      this.antiDiag += toAdd;
    }

    if ((this.rows[row] === target || this.cols[col] === target) ||
      (this.diag === target || this.antiDiag === target)) {
      return player;
    }

    return 0;
  }
};


const n = 3
const ticTacToe = new TicTacToe(n);
console.log(ticTacToe.move(0, 0, 1)); // return 0 (no one wins)
console.log(ticTacToe.move(0, 2, 2)); // return 0 (no one wins)
console.log(ticTacToe.move(2, 2, 1)); // return 0 (no one wins)
console.log(ticTacToe.move(1, 1, 2)); // return 0 (no one wins)
console.log(ticTacToe.move(2, 0, 1)); // return 0 (no one wins)
console.log(ticTacToe.move(1, 0, 2)); // return 0 (no one wins)
console.log(ticTacToe.move(2, 1, 1)); // return 1 (player 1 wins)