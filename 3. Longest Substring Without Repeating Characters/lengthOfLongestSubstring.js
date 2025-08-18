/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
  const previousChars = new Set();
  let left = 0;
  let right = 0;
  let count = 0;
  let maxCount = 0;

  while (right < s.length) {
    if (!previousChars.has(s[right])) {
      previousChars.add(s[right]);
      right++;
      count++;
      maxCount = Math.max(maxCount, count);
    } else {
      previousChars.delete(s[left]);
      left++;
      count--;
    }
  }

  return maxCount;
};

const s = "abcabcbb";
console.log('lengthOfLongestSubstring: ', lengthOfLongestSubstring(s))
