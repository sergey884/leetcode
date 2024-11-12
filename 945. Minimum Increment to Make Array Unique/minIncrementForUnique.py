from typing import List

class Solution:
  def minIncrementForUnique(self, nums: List[int]) -> int:
    nums.sort()
    res = 0
    
    for i in range(1, len(nums)):
      if nums[i - 1] >= nums[i]:
        delta = nums[i - 1] - nums[i] + 1
        nums[i] += delta
        res += delta
        
    return res
    

nums = [3, 2, 1, 2, 1, 7]
solution = Solution()
print('minIncrementForUnique: ', solution.minIncrementForUnique(nums))
