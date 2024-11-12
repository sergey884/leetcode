/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const countSubarrays = (nums, k) => {
  let maxN = Math.max(...nums);
  let maxCnt = 0;

  let left = 0;
  let res = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === maxN) {
      maxCnt++;
    }

    while (maxCnt > k || (left <= right && maxCnt === k && nums[left] !== maxN)) {
      if (nums[left] === maxN) {
        maxCnt--;
      }
      left++;
    }

    if (maxCnt === k) {
      res += left + 1
    }
  }

  return res;
};

const nums = [1, 3, 2, 3, 3];
const k = 2;
console.log('countSubarrays: ', countSubarrays(nums, k));
