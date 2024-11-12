/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsetsWithDup = (nums) => {
  nums.sort((a, b) => a - b);
  const currentSubset = [];
  const subsets = [];

  const backtracking = (currentSubset, index) => {
    subsets.push([...currentSubset]);

    for (let i = index; i < nums.length; i++) {
      if (i !== index && nums[i] === nums[i - 1]) {
        continue;
      }

      currentSubset.push(nums[i]);
      backtracking(currentSubset, i + 1);
      currentSubset.pop();
    }
  };

  backtracking(currentSubset, 0);
  return subsets;
};


const nums = [1, 2, 2];
console.log('subsetsWithDup: ', subsetsWithDup(nums));
