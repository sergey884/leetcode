from typing import List

class Solution:
  def singleNumber(self, nums: List[int]) -> int:
    ones = 0
    twos = 0

    for num in nums:
      ones = (ones ^ num) & ~twos
      twos = (twos ^ num) & ~ones

    return ones
  

nums = [2, 2, 3, 2]
solution = Solution()
print('singleNumber: ', solution.singleNumber(nums)) # 3
