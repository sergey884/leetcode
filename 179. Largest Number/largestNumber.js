/**
 * @param {number[]} nums
 * @return {string}
 */
const largestNumber = (nums) => {
  const res = nums
    .map(String)
    .sort((a, b) => (b + a) - (a + b))
    .join('');

  return res[0] === '0' ? '0' : res;
};


const nums = [3, 30, 34, 5, 9];
console.log('largestNumber: ', largestNumber(nums)); // 9534330
