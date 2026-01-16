/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSumOfThreeSubarrays = (nums, k) => {
  let firstKSum = 0;
  for (let i = 0; i < k; i++) {
    firstKSum += nums[i];
  }
  const kSums = [firstKSum];

  for (let i = k; i < nums.length; i++) {
    kSums.push(kSums[kSums.length - 1] + nums[i] - nums[i - k]);
  }

  const dp = {};
  const getMaxSum = (i, cnt) => {
    if (cnt === 3 || i > nums.length - k) {
      return 0;
    }

    if (dp[`${i}-${cnt}`] !== undefined) {
      return dp[`${i}-${cnt}`];
    }

    // include
    const include = kSums[i] + getMaxSum(i + k, cnt + 1);
    // skip
    const skip = getMaxSum(i + 1, cnt);

    dp[`${i}-${cnt}`] = Math.max(include, skip);
  
    return dp[`${i}-${cnt}`];
  };

  const indices = [];
  let i = 0;

  while (i < nums.length - k && indices.length < 3) {
    const include = kSums[i] + getMaxSum(i + k, indices.length + 1);
    const skip = getMaxSum(i + 1, indices.length);

    if (include >= skip) {
      indices.push(i);
      i += k;
    } else {
      i++;
    }
  }

  return indices;
};

const nums = [1, 2, 1, 2, 6, 7, 5, 1];
const k = 2;
console.log(maxSumOfThreeSubarrays(nums, k)); // [0, 3, 5]
