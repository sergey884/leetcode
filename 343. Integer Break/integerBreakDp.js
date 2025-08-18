/**
 * @param {number} n
 * @return {number}
 */
const integerBreak = (n) => {
  if (n === 2) {
    return 1;
  }

  if (n === 3) {
    return 2;
  }

  const dp = Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 3;

  for (let i = 4; i <= n; i++) {
    let ans = i;
    for (let j = 1; j < i; j++) {
      ans = Math.max(ans, j * dp[i - j]);
    }
    dp[i] = ans;
  }

  return dp[n];
};


const n = 10;
console.log('integerBreak: ', integerBreak(n));
