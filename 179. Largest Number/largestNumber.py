from functools import cmp_to_key
from typing import List

class Solution:
  def largestNumber(self, nums: List[int]) -> str:
    def compare(x, y):
      return 1 if x + y < y + x else -1
    
    numStrs = [str(num) for num in nums]
    numStrs.sort(key = cmp_to_key(compare))

    if numStrs[0] == '0':
      return '0'

    return ''.join(numStrs)
  

nums = [3, 30, 34, 5, 9]
solution = Solution()
print('largestNumber: ', solution.largestNumber(nums)) # 9534330
