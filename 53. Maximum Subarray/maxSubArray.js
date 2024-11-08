/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums) => {
  let maxSubArraySum = nums[0];
  let currentSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSubArraySum = Math.max(maxSubArraySum, currentSum);
  }

  return maxSubArraySum;
};


const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log('maxSubArray: ', maxSubArray(nums));
