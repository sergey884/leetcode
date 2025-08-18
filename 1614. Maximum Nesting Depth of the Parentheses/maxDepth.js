/**
 * @param {string} s
 * @return {number}
 */
const maxDepth = (s) => {
  let res = 0;
  let cur = 0;

  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case '(':
        cur++;
        break;
      case ')':
        cur--
        break;
    }

    res = Math.max(res, cur);
  }

  return res;
};


const s = "(1+(2*3)+((8)/4))+1";
console.log('maxDepth: ', maxDepth(s));
