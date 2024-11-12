/**
 * @param {string} s
 * @return {string}
 */
const minRemoveToMakeValid = (s) => {
  const res = [];
  let cnt = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      res.push(s[i]);
      cnt++;
    }else if (s[i] === ')' && cnt > 0) {
      res.push(s[i]);
      cnt--;
    } else if (s[i] !== ')') {
      res.push(s[i]);
    }
  }

  const filtered = [];
  for (let j = res.length - 1; j >= 0; j--) {
    if (res[j] === '(' && cnt > 0) {
      cnt--;
    } else {
      filtered.push(res[j]);
    }
  }

  return filtered.reverse().join('');
};


const s = "lee(t(c)o)de)";
console.log('minRemoveToMakeValid: ', minRemoveToMakeValid(s));
