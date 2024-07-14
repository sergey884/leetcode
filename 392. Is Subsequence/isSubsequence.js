/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = (s, t) => {
  if (!s) {
    return true;
  }

  let i = 0;
  for (let j = 0; j < t.length; j++) {
    if (t[j] === s[i]) {
      i++;
      if (i === s.length) {
        return true;
      }
    }
  }

  return false;
};


const s = "b";
const t = "abc";
console.log("isSubsequence: ",  isSubsequence(s, t))
