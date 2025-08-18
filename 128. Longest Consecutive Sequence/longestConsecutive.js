/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = (nums) => {
  const seen = new Set(nums);
  let longest = 0;

  for (let i = 0; i < nums.length; i++) {
    if (seen.has(nums[i] - 1)) {
      continue;
    }

    let len = 0;
    while (seen.has(nums[i] + len)) {
      len++;
    }
    longest = Math.max(longest, len);
  }

  return longest;
};


const nums = [100, 4, 200, 1, 3, 2];
console.log('longestConsecutive: ', longestConsecutive(nums));
