/**
 * @param {number[]} nums
 * @return {number[]}
 */
const frequencySort = (nums) => {
  const frequencyOfNums = {};
  for (let i = 0; i < nums.length; i++) {
    if (!frequencyOfNums[nums[i]]) {
      frequencyOfNums[nums[i]] = 0;
    }
    frequencyOfNums[nums[i]]++;
  }

  const sortedNums = nums.sort((a, b) => {
    return (frequencyOfNums[a] - frequencyOfNums[b]) || b - a
  });
  
  return sortedNums;
};


const nums = [1, 1, 2, 2, 2, 3];
console.log('frequencySort: ', frequencySort(nums));
