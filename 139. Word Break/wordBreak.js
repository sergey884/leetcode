/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
const wordBreak = (s, wordDict) => {
	const sLen = s.length;
  const dp = Array(sLen + 1).fill(false);
	dp[sLen] = true;

	for (let i = sLen; i >= 0; i--) {
		for (let j = 0; j < wordDict.length; j++) {
			if ((i + wordDict[j].length) <= sLen && s.substring(i, i +  wordDict[j].length) === wordDict[j]) {
				dp[i] = dp[i +  wordDict[j].length];
			}
			if (dp[i]) {
				break;
			}
		}
	}

	return dp[0];
};


const s = "leetcode";
const wordDict = ["leet", "code"];
console.log('wordBreak: ', wordBreak(s, wordDict))
