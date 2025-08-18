/**
 * @param {number[]} nums
 * @return {number}
 */
const maxFrequencyElements = (nums) => {
  const frequencyNums = {};
  let maxFrequency = 0;

  for (let i = 0; i < nums.length; i++) {
    if (!frequencyNums[nums[i]]) {
      frequencyNums[nums[i]] = 0;
    }

    frequencyNums[nums[i]]++;
    maxFrequency = Math.max(maxFrequency, frequencyNums[nums[i]]);
  }

  let maxFreqCount = 0;
  for (let num in frequencyNums) {
    if (frequencyNums[num] === maxFrequency) {
      maxFreqCount += maxFrequency;
    }
  }

  return maxFreqCount;
};

const nums = [1, 2, 2, 3, 1, 4];
console.log("maxFrequencyElements: ", maxFrequencyElements(nums));
