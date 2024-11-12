/**
 * @param {number[]} nums
 * @return {number}
 */
const findPeakElement = (nums) => {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid + 1] >= nums[mid]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
};


const nums = [1, 2, 3, 1];
console.log('findPeakElement: ', findPeakElement(nums));
