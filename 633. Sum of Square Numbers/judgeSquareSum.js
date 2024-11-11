/**
 * @param {number} c
 * @return {boolean}
 */
const judgeSquareSum = (c) => {
  let left = 0;
  let right = Math.round(Math.sqrt(c));

  while (left < right) {
    const sum = left * left + right * right;
    if (sum === c) {
      return true;
    } else if (sum < c) {
      left++;
    } else {
      right--;
    }
  }

  return false;
};


const c = 5;
console.log('judgeSquareSum: ', judgeSquareSum(c));
