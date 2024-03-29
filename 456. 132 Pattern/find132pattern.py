from typing import List

class Solution:
  def find132pattern(self, nums: List[int]) -> bool:
    stack = []
    minSoFar = nums[0]

    for n in nums[1:]:
      while stack and n >= stack[-1][0]:
        stack.pop()

      if stack and n > stack[-1][1]:
        return True
      
      stack.append([n, minSoFar])
      minSoFar = min(minSoFar, n)
    
    return False

nums = [3, 1, 4, 2]
solution = Solution()
print('find132pattern: ', solution.find132pattern(nums))
