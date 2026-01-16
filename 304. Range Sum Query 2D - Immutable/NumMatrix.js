class NumMatrix {
  /**
   * @param {number[][]} matrix
   */
  constructor(matrix) {
    if (!matrix || !matrix.length || !matrix[0].length) {
      this.prefixSum = [];
      return;
    }
    const ROWS = matrix.length;
    const COLS = matrix[0].length;
    this.prefixSum = Array.from({ length: ROWS + 1 }, 
      () => Array(COLS + 1).fill(0)
    );

    for (let r = 1; r <= ROWS; r++) {
      for (let c = 1; c <= COLS; c++) {
        this.prefixSum[r][c] = this.prefixSum[r - 1][c] +
          this.prefixSum[r][c - 1] - 
          this.prefixSum[r - 1][c - 1] +
          matrix[r - 1][c - 1];
      }
    }
  }

  /** 
   * @param {number} row1 
   * @param {number} col1 
   * @param {number} row2 
   * @param {number} col2
   * @return {number}
   */
  sumRegion(row1, col1, row2, col2) {
    return this.prefixSum[row2 + 1][col2 + 1] -
      this.prefixSum[row1][col2 + 1] -
      this.prefixSum[row2 + 1][col1] +
      this.prefixSum[row1][col1];
  }
}

const matrix = [
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5]
];

// const matrix2 = [
//   [3, 0, 1],
//   [5, 6, 3],
//   [1, 2, 0],
// ];
const numMatrix = new NumMatrix(matrix);
console.log(numMatrix.sumRegion(2, 1, 4, 3)); // 8
