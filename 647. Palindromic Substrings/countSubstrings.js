/**
 * @param {string} s
 * @return {number}
 */
const countSubstrings = (s) => {
  const n = s.length;
  const countPolindrom = (left, right) => {
    let cnt = 0;
    while (left >= 0 && right < n && s[left] === s[right]) {
      cnt++;
      left--;
      right++;
    }

    return cnt;
  };

  let res = 0;
  for (let i = 0; i < n; i++) {
    res += countPolindrom(i, i);
    res += countPolindrom(i, i + 1);
  }

  return res;
};