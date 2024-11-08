from typing import List

class Solution:
  def longestSubarray(self, nums: List[int]) -> int:
    maxSubArray = 0
    currentSubArray = 0
    maxElement = nums[0]

    for i in range(len(nums)):
      if nums[i] > maxElement:
        maxElement = nums[i]
        currentSubArray = 0
        maxSubArray = 0

      if maxElement == nums[i]:
        currentSubArray += 1
      else:
        currentSubArray = 0

      maxSubArray = max(maxSubArray, currentSubArray)
    
    return maxSubArray


nums = [1, 2, 3, 3, 2, 2]
solution = Solution()
print("longestSubarray: ", solution.longestSubarray(nums)) # 3
