/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  const previousValues = {};

  for (let i = 0; i < nums.length; i++) {
    let remainingSum = target - nums[i];

    if (previousValues[remainingSum] !== undefined) {
      return [previousValues[remainingSum], i];
    } else {
      previousValues[nums[i]] = i;
    }
  }
  
  return [];
};

const nums = [2, 7, 11, 15];
const target = 9;
console.log('twoSum: ', twoSum(nums, target));