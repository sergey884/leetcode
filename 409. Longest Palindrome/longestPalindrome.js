/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = (s) => {
  const charCnt = {};
  let res = 0;

  for (let i = 0; i < s.length; i++) {
    if (!charCnt[s[i]]) {
      charCnt[s[i]] = 0;
    }
    charCnt[s[i]]++;

    if (charCnt[s[i]] % 2 === 0) {
      res += 2;
    }
  }

  for (let key in charCnt) {
    if (charCnt[key] % 2) {
      res++;
      break;
    }
  }

  return res;
};


const s = "abccccdd";
console.log('longestPalindrome: ', longestPalindrome(s));
