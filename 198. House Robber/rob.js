/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = (nums) => {
  let rob1 = 0;
  let rob2 = 0;

  for (let i = 0; i < nums.length; i++) {
    const temp = Math.max(rob1 + nums[i], rob2);
    rob1 = rob2;
    rob2 = temp;
  }

  return rob2;
};


const nums = [1, 2, 3, 1];
console.log('rob: ', rob(nums));
