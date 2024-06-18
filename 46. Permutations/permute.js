/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = (nums) => {
  const permutations = [];
  const l = nums.length;
  const used = Array(l).fill(false);

  const dfs = (path) => {
    if (path.length === l) {
      permutations.push([...path]);
      return;
    }

    for (let i = 0; i < l; i++) {
      if (used[i]) {
        continue;
      }
      used[i] = true;
      path.push(nums[i]);
      dfs(path);
      path.pop();
      used[i] = false;
    }
  };

  dfs([]);
  return permutations;
};


const nums = [1,2,3]
console.log('permute: ', permute(nums));
