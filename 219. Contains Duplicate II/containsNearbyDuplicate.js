/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = (nums, k) => {
  const indexMap = {};
  for (let i = 0; i < nums.length; i++) {
    if (indexMap[nums[i]] !== undefined && nums[i] === nums[indexMap[nums[i]]] && i - indexMap[nums[i]] <= k) {
      return true;
    }

    indexMap[nums[i]] = i;
  }

  return false;
};


const nums = [1, 2, 3, 1];
const k = 3;
console.log('containsNearbyDuplicate: ', containsNearbyDuplicate(nums, k));
