/**
 * @param {string} s
 * @return {boolean}
 */
const checkValidString = (s) => {
  let leftMin = 0;
  let leftMax = 0;

  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case '(':
        leftMin++;
        leftMax++;
        break;
      case ')':
        leftMin--;
        leftMax--;
        break;
      case '*':
        leftMin--;
        leftMax++;
        break;
    }

    if (leftMax < 0) {
      return false;
    }

    if (leftMin < 0) {
      leftMin = 0;
    }
  }

  return leftMin === 0;
};

const s = "(*)";
console.log('checkValidString: ', checkValidString(s));
