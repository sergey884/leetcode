/**
 * @param {number[]} nums
 * @return {number}
 */
const longestSubarray = (nums) => {
  let maxSubArray = 0;
  let currentSubArray = 0;
  let maxElement = nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > maxElement) {
      maxElement = nums[i];
      currentSubArray = 0;
      maxSubArray = 0;
    }

    if (maxElement === nums[i]) {
      currentSubArray++;
    } else {
      currentSubArray = 0;
    }

    maxSubArray = Math.max(maxSubArray, currentSubArray);
  }

  return maxSubArray;
};


const nums = [1, 2, 3, 3, 2, 2];
console.log("longestSubarray: ", longestSubarray(nums)); // 3
