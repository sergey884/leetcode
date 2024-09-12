from typing import List

class Solution:
  def numSubarraysWithSum(self, nums: List[int], goal: int) -> int:
    def helper(x):
      if x < 0: 
        return 0
      
      res = 0
      left, cur = 0, 0
      for right in range(len(nums)):
        cur += nums[right]

        while cur > x:
          cur -= nums[left]
          left += 1
        res += (right - left + 1)
      
      return res
        
    return helper(goal) - helper(goal - 1)


nums = [1,0,1,0,1]
goal = 2
solution = Solution()
print('numSubarraysWithSum: ', solution.numSubarraysWithSum(nums, goal))
