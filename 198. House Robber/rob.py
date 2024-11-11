from typing import List

class Solution:
  def rob(self, nums: List[int]) -> int:
    rob1, rob2 = 0, 0
    
    for i in range(len(nums)):
      temp = max(rob1 + nums[i], rob2)
      rob1 = rob2
      rob2 = temp
    
    return rob2
  

nums = [1, 2, 3, 1]
solution = Solution()
print('rob: ', solution.rob(nums))
