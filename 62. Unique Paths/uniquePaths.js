/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = (m, n) => {
  const dp = Array.from({ length: m }, () => Array(n).fill(0));
  dp[m - 1][n - 1] = 1;

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (i + 1 < m) {
        dp[i][j] += dp[i + 1][j];
      }

      if (j + 1 < n) {
        dp[i][j] += dp[i][j + 1];
      }
    }
  }

  return dp[0][0];
};


const m = 3;
const n = 7;
console.log(uniquePaths(m, n)); // 28
