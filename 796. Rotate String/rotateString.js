/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
const rotateString = (s, goal) => {
  if (s.length !== goal.length) {
    return false;
  }

  let rotatedString = s;
  for (let i = 0; i < s.length; i++) {
    rotatedString = rotatedString.slice(1) + rotatedString[0];
    if (rotatedString === goal) {
      return true;
    }
  }

  return false;
};

// const s = "abcde";
// const goal = "cdeab";
const s =    "defdefdefabcabc";
const goal = "defdefabcabcdef";
console.log('rotateString: ', rotateString(s, goal));
