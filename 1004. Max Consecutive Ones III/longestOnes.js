/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const longestOnes = (nums, k) => {
  let left = 0;
  let right = 0;
  let maxWindow = 0;
  let currWindow = 0
  let amountOfZeroesInWindow = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 1) {
      currWindow++;
    }

    if (nums[right] === 0 && amountOfZeroesInWindow <= k) {
      amountOfZeroesInWindow++;
      currWindow++;
    }

    while (amountOfZeroesInWindow > k) {
      if (nums[left] === 0) {
        amountOfZeroesInWindow--;
      }
      left++;
      currWindow--;
    }

    maxWindow = Math.max(maxWindow, currWindow);
  }

  return maxWindow;
};


const nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0];
const k = 2
console.log('longestOnes: ', longestOnes(nums, k));
