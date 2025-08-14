/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
const kthSmallest = (matrix, k) => {
  const N = matrix.length;

  const countLessOrEqual = (target) => {
    let count = 0;
    let row = N - 1;
    let col = 0;

    while (row >= 0 && col < N) {
      if (matrix[row][col] <= target) {
        count += row + 1;
        col++;
      } else {
        row--;
      }
    }

    return count;
  };

  let low = matrix[0][0];
  let high = matrix[N - 1][N - 1];

  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    const count = countLessOrEqual(mid);

    if (count < k) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  return low;
};