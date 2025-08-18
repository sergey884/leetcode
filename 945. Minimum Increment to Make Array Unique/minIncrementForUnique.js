/**
 * @param {number[]} nums
 * @return {number}
 */
const minIncrementForUnique = (nums) => {
  nums.sort((a, b) => a - b);
  let res = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] >= nums[i]) {
        const delta = nums[i - 1] - nums[i] + 1;
        nums[i] += delta;
        res += delta;
    }
  }

  return res;
};


const nums = [3, 2, 1, 2, 1, 7];
console.log('minIncrementForUnique: ', minIncrementForUnique(nums));
