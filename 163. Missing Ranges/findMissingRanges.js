/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number[][]}
 */
const findMissingRanges = (nums, lower, upper) => {
  if (!nums || !nums.length) {
    return [[lower, upper]];
  }

  const missingRanges = [];
  if (lower < nums[0]) {
    missingRanges.push([lower, nums[0] - 1]);
  }

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] + 1 !== nums[i + 1]) {
      missingRanges.push([nums[i] + 1, nums[i + 1] - 1]);
    }
  }

  if (upper > nums[nums.length - 1]) {
    missingRanges.push([nums[nums.length - 1] + 1, upper]);
  }

  return missingRanges;
};


const nums = [0, 1, 3, 50, 75];
const lower = 0;
const upper = 99;
// Output: [[2,2], [4,49], [51,74], [76,99]]
console.log('findMissingRanges: ', findMissingRanges(nums, lower, upper));
