/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDuplicates = (nums) => {
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    let num = Math.abs(nums[i]);
    if (nums[num - 1] < 0) {
      res.push(num);
    }

    nums[num - 1] = -nums[num - 1]
  }

  return res;
};

const nums = [4, 3, 2, 7, 8, 2, 3, 1];
console.log('findDuplicates: ', findDuplicates(nums));
