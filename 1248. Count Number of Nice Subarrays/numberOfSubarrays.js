/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const numberOfSubarrays = (nums, k) => {
  let left = 0;
  let middle = 0;
  let oddCnt = 0;
  let res = 0;

  for (let r = 0; r < nums.length; r++) {
    if (nums[r] % 2) {
      oddCnt++;
    }

    while (oddCnt > k) {
      if (nums[left] % 2) {
        oddCnt--;
      }
      left++;
      middle = left;
    }

    if (oddCnt === k) {
      while (nums[middle] % 2 === 0) {
        middle++;
      }
      res += (middle - left) + 1;
    }
  }

  return res;
};


const nums = [1, 1, 2, 1, 1];
const k = 3;
console.log('numberOfSubarrays: ', numberOfSubarrays(nums, k));
