/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) => {
  let ones = 0;
  let twos = 0;

  for (const num of nums) {
    ones = (ones ^ num) & ~twos;
    twos = (twos ^ num) & ~ones;
  }

  return ones;
};


const nums = [2, 2, 3, 2];
console.log('singleNumber: ', singleNumber(nums)); // 3
