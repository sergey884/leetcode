/**
 * @param {string} s
 * @return {string}
 */
const makeGood = (s) => {
  const stack = [];
  let i = 0;

  while (i < s.length) {
    if (
      stack.length &&
      stack[stack.length - 1] !== s[i] &&
      stack[stack.length - 1].toLowerCase() === s[i].toLowerCase()
    ) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
    i++;
  }

  return stack.join('');
};

const s = "leEeetcode";
console.log('makeGood: ', makeGood(s));
