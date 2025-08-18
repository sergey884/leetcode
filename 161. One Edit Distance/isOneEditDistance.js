/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isOneEditDistance = (s, t) => {
  const sLen = s.length;
  const tLen = t.length;

  if (sLen > tLen) {
    return isOneEditDistance(t, s);
  }

  if (tLen - sLen > 1) {
    return false;
  }

  for (let i = 0; i < sLen; i++) {
    if (s[i] !== t[i]) {
      if (sLen === tLen) {
        return s.slice(i + 1) === t.slice(i + 1);
      } else {
        return s.slice(i) === t.slice(i + 1);
      }
    }
  }

  return sLen + 1 === tLen;
};

const s = "ab";
const t = "acb";
console.log(isOneEditDistance(s, t)); // true
