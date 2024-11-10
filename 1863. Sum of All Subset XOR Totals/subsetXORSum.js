/**
 * @param {number[]} nums
 * @return {number}
 */
const subsetXORSum = (nums) => {
  let result = 0;
  const dfs = (index, currentXor) => {
    if (index === nums.length) {
      result += currentXor;
      return;
    }

    dfs(index + 1, currentXor);
    dfs(index + 1, currentXor ^ nums[index]);
  }

  dfs(0, 0);
  return result;
};

const nums = [5, 1, 6];
console.log('subsetXORSum: ', subsetXORSum(nums)); // 28