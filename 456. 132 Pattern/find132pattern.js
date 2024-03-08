/**
 * @param {number[]} nums
 * @return {boolean}
 */
const find132pattern = (nums) => {
  const stack = [];
  let value3InPattern = -Infinity;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] < value3InPattern) {
      return true;
    } else {
      while (stack.length && stack[stack.length - 1] < nums[i]) {
        value3InPattern = stack.pop()
      }
    }

    stack.push(nums[i])
  }

  return false;
};

const nums = [-1, 3, 2, 0];
console.log('find132pattern: ', find132pattern(nums));
