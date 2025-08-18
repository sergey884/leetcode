/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = (nums, k) => {
  const sorted = nums.sort((a, b) => b - a);
  return sorted[k - 1];
};

const nums = [3, 2, 1, 5, 6, 4];
const k = 2;
console.log('findKthLargest: ', findKthLargest(nums, k)); // 5
