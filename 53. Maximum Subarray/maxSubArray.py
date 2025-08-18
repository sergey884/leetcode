from typing import List

class Solution:
  def maxSubArray(self, nums: List[int]) -> int:
    maxSubArraySum = nums[0]
    currentSum = 0

    for n in nums:
      currentSum = max(n, currentSum + n)
      maxSubArraySum = max(maxSubArraySum, currentSum)

    return maxSubArraySum


nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
solution = Solution()
print('maxSubArray: ', solution.maxSubArray(nums))
