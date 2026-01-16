function checkSubarraySum(nums: number[], k: number): boolean {
  const reminderToIndex: { [key: string]: number } = { 0: -1 };
  let prefixSum: number = 0;

  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i];
    const reminder = prefixSum % k;
    if (reminderToIndex[reminder] === undefined) {
      reminderToIndex[reminder] = i;
    } else if (i - reminderToIndex[reminder] >= 2) {
      return true;
    }
  }

  return false;
};