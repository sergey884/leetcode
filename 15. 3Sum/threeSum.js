/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
  const res = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i - 1] === nums[i]) {
      continue;
    }

    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum > 0) {
        right--;
      }

      if (sum < 0) {
        left++;
      }

      if (sum === 0) {
        res.push([nums[i], nums[left], nums[right]]);
        left++;
        while (nums[left - 1] === nums[left] && left < right) {
          left++;
        }
      }
    }
  }

  return res;
};

const nums = [-1, 0, 1, 2, -1, -4];
console.log('threeSum: ', threeSum(nums));
