/**
 * @param {string} s
 * @return {number}
 */
const numSteps = (s) => {
  let steps = 0;
  let carry = 0;

  for (let i = s.length - 1; i > 0; i--) {
    if (parseInt(s[i]) + carry === 1) {
      carry = 1;
      steps += 2;
    } else {
      steps += 1;
    }
  }

  return steps + carry;
};


const s = "1101";
console.log('numSteps: ', numSteps(s))
