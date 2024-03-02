/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = (nums) => {
  const res = [];
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    if (nums[left] ** 2 > nums[right] ** 2) {
      res.push(nums[left] ** 2);
      left++;
    } else {
      res.push(nums[right] ** 2);
      right--;
    }
  }

  return res.reverse();
};

const nums = [-4, -1, 0, 3, 10];
console.log('sortedSquares: ', sortedSquares(nums));
