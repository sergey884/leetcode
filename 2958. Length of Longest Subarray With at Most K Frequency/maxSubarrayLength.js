/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maxSubarrayLength = (nums, k) => {
  const frequencyMap = {};
  let res = 0;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    if (!frequencyMap[nums[right]]) {
      frequencyMap[nums[right]] = 0;
    }
    frequencyMap[nums[right]]++;

    while (frequencyMap[nums[right]] > k) {
      frequencyMap[nums[left]]--;
      left++;
    }

    res = Math.max(res, right - left + 1)
  }

  return res;
};

const nums = [1, 2, 3, 1, 2, 3, 1, 2];
const k = 2;
console.log('maxSubarrayLength: ', maxSubarrayLength(nums, k))
