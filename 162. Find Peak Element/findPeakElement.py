from typing import List

class Solution:
  def findPeakElement(self, nums: List[int]) -> int:
    left = 0
    right = len(nums) - 1
    
    while left < right:
      mid = (left + right) // 2
      if nums[mid + 1] >= nums[mid]:
        left = mid + 1
      else:
        right = mid
        
    return left
    
    
nums = [1, 2, 3, 1]
solution = Solution()
print('findPeakElement: ', solution.findPeakElement(nums))
