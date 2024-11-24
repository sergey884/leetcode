/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
const rotateString = (s, goal) => {
  if (s.length !== goal.length) {
    return false;
  }

  const doubledString = s + s;

  return doubledString.indexOf(goal) > -1;
  // return doubledString.includes(goal);
};

// const s = "abcde";
// const goal = "cdeab";
const s =    "defdefdefabcabc";
const goal = "defdefabcabcdef";
console.log('rotateString: ', rotateString(s, goal));
