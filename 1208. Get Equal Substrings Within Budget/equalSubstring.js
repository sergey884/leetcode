/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
const equalSubstring = (s, t, maxCost) => {
  let currentCost = 0;
  let left = 0;
  let res = 0;

  for (let right = 0; right < s.length; right++) {
    currentCost += Math.abs(s[right].charCodeAt(0) - t[right].charCodeAt(0));

    while (currentCost > maxCost) {
      currentCost -= Math.abs(s[left].charCodeAt(0) - t[left].charCodeAt(0));
      left++;
    }
    
    res = Math.max(res, right - left + 1);
  }

  return res;
};


const s = "abcd";
const t = "bcdf";
const maxCost = 3;

console.log('equalSubstring: ', equalSubstring(s, t, maxCost));
