/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
const countSubarrays = (nums, minK, maxK) => {
  let res = 0;
  let j = -1;
  let prevMinKIndex = -1;
  let prevMaxKIndex = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < minK || nums[i] > maxK) {
      j = i;
    }

    if (nums[i] === minK) {
      prevMinKIndex = i;
    }

    if (nums[i] === maxK) {
      prevMaxKIndex = i;
    }

    res += Math.max(0, Math.min(prevMinKIndex, prevMaxKIndex) - j);
  }

  return res;
};

const nums = [1, 3, 5, 2, 7, 5];
const minK = 1;
const maxK = 5;
console.log('countSubarrays: ', countSubarrays(nums, minK, maxK));
