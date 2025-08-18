from typing import List

class Solution:
  def maxSubarrayLength(self, nums: List[int], k: int) -> int:
    frequencyMap = {}
    res = 0
    
    left = 0
    for right in range(len(nums)):
      if nums[right] not in frequencyMap:
        frequencyMap[nums[right]] = 0
      frequencyMap[nums[right]] += 1
      
      while frequencyMap[nums[right]] > k:
        frequencyMap[nums[left]] -= 1
        left += 1
      
      res = max(res, right - left + 1)
      
    return res    
  
nums = [1, 2, 3, 1, 2, 3, 1, 2]
k = 2
solution = Solution()
print('maxSubarrayLength: ', solution.maxSubarrayLength(nums, k))
