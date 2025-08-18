/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
  if (nums.length <= 2) {
    return nums.length;
  }

  let left = 2
  for (let right = 2; right < nums.length; right++) {
    if (nums[right] !== nums[left - 2]) {
      nums[left] = nums[right];
      left++;
    }
  }

  return left;
};

nums = [1, 1, 1, 2, 2, 3]
console.log('removeDuplicates: ', removeDuplicates(nums))
