from typing import List

class Solution:
  def countSubarrays(self, nums: List[int], minK: int, maxK: int) -> int:
    res = 0
    j = -1
    prevMinKIndex = -1
    prevMaxKIndex = -1
    
    for i in range(len(nums)):
      if nums[i] < minK or nums[i] > maxK:
        j = i
        
      if nums[i] == minK:
        prevMinKIndex = i
        
      if nums[i] == maxK:
        prevMaxKIndex = i

      res += max(0, min(prevMinKIndex, prevMaxKIndex) - j)
      
    return res
  
nums = [1, 3, 5, 2, 7, 5]
minK = 1
maxK = 5
solution = Solution()
print('countSubarrays: ', solution.countSubarrays(nums, minK, maxK))
