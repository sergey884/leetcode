/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
const search = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return true;
    }

    if (nums[left] < nums[mid]) { // left portion
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else if (nums[left] > nums[mid]) { // right portion
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    } else {
      left++;
      if (nums[right] === nums[mid]) {
        right--;
      }
    }
  }

  return false;  
};

const nums = [2, 5, 6, 0, 0, 1, 2];
const target = 5;
console.log('search: ', search(nums, target));
