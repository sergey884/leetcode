/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraySum = (nums, k) => {
  let count = 0;
  let currSum = 0;
  const prefixSum = { 0: 1 };
  for (let i = 0; i < nums.length; i++) {
    currSum += nums[i];
    const diff = currSum - k;
    if (prefixSum[diff]) {
      count += prefixSum[diff];
    }
    prefixSum[currSum] = (prefixSum[currSum] || 0) + 1;
  }

  return count;
};

const nums = [1, 1, 1];
const k = 2;
console.log("subarraySum: ", subarraySum(nums, k)); // 2
