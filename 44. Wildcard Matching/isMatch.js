/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = (s, p) => {
  const n = s.length;
  const m = p.length;

  const dp = Array(n + 1).fill(null).map(() => Array(m + 1).fill(false));

  dp[0][0] = true;

  for (let j = 1; j <= m; j++) {
    if (p[j - 1] === '*') {
      dp[0][j] = dp[0][j - 1];
    }
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (p[j - 1] === '*') {
        let matchEmpty = dp[i - 1][j];
        let matchSome = dp[i][j - 1];
        dp[i][j] = matchEmpty || matchSome;
      } else if (p[j - 1] === '?' || p[j - 1] === s[i - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      }
    }
  }

  return dp[n][m];
};

s = "aa"
p = "a"
console.log('isMatch: ', isMatch(s, p))
