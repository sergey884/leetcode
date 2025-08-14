/**
 * @param {number[]} nums
 * @return {number}
 */
const findScore = (nums) => {
  let ans = 0;
  let i = 0;
  const n = nums.length;

  while (i < n) {
    let currentStart = i;
    while (i + 1 < n && nums[i + 1] < nums[i]) {
        i++;
    }
  }
};