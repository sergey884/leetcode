/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = (nums, k) => {
  const reverseArray = (arr, left, right) => {
    while (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }

  k = k % nums.length;
  let left = 0;
  let right = nums.length - 1;
  reverseArray(nums, left, right);

  left = 0;
  right = k - 1;
  reverseArray(nums, left, right);

  left = k;
  right = nums.length - 1;
  reverseArray(nums, left, right);
};

const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
console.log('rotate: ', rotate(nums, k), nums);
