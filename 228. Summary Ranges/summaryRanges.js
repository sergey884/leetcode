/**
 * @param {number[]} nums
 * @return {string[]}
 */
const summaryRanges = (nums) => {
  if (!nums || !nums.length) {
    return [];
  }

  let rangeStart = nums[0];
  const res = [];
  const len = nums.length;

  for (let i = 1; i < len; i++) {
    if (nums[i] !== nums[i - 1] + 1) {
      if (rangeStart === nums[i - 1]) {
        res.push(String(nums[i - 1]));
      } else {
        res.push(`${rangeStart}->${nums[i - 1]}`);
      }
      rangeStart = nums[i];
    }
  }

  if (rangeStart === nums[len - 1]) {
    res.push(String(nums[len - 1]));
  } else {
    res.push(`${rangeStart}->${nums[len - 1]}`);
  }

  return res;
};


const nums = [0, 1, 2, 4, 5, 7];
// ["0->2","4->5","7"]
console.log('summaryRanges: ', summaryRanges(nums));
