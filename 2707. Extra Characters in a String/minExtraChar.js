/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */
const minExtraChar = (s, dictionary) => {
  const l = s.length;
  const dictionarySet = new Set(dictionary);
  const dp = new Array(l + 1).fill(0);

  for (let i = 1; i <= l; i++) {
    dp[i] = dp[i - 1] + 1;
    for (let j = 0; j < i; j++) {
      if (dictionarySet.has(s.slice(j, i))) {
        dp[i] = Math.min(dp[i], dp[j]);
      }
    }
  }

  return dp[l];
};


const s = "eleetscode";
const dictionary = ["leet", "code", "leetcode"];
console.log('minExtraChar: ', minExtraChar(s, dictionary)); // 0
