/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) => {
  let res = 0;

  for (let i = 0; i < nums.length; i++) {
    res = nums[i] ^ res;
  }

  return res;
};

const nums = [4, 1, 2, 1, 2];
console.log('singleNumber: ', singleNumber(nums));
