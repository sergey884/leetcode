/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const reverse = (nums, left, right) => {
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]]
    left++;
    right--;
  }
};

const nextPermutation = (nums) => {
  const n = nums.length;

  let i = n - 2;
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }

  if (i >= 0) {
    for (let j = n - 1; j > i; j--) {
      if (nums[j] > nums[i]) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        break;
      }
    }
  }

  reverse(nums, i + 1, n - 1);
};

const nums = [2, 3, 1]
console.log('nextPermutation: ', nextPermutation(nums))
