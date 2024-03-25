from typing import List

class Solution:
  def findDuplicates(self, nums: List[int]) -> List[int]:
    res = []
    
    for num in nums:
      n = abs(num)
      if nums[n - 1] < 0:
        res.append(n)
        
      nums[n - 1] = -nums[n - 1]
      
    return res


nums = [4, 3, 2, 7, 8, 2, 3, 1]
solution = Solution()
print('findDuplicates: ', solution.findDuplicates(nums))
