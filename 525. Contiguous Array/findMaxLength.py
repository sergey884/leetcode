from typing import List

class Solution:
  def findMaxLength(self, nums: List[int]) -> int:
    zero, one = 0, 0
    res = 0

    diffIndexPrefix = {}

    for i, n in enumerate(nums):
      if n == 0:
        zero += 1
      else:
        one += 1

      if one - zero not in diffIndexPrefix:
        diffIndexPrefix[one  - zero] = i

      if one == zero:
        res = one + zero
      else:
        idx =  diffIndexPrefix[one  - zero]
        res = max(res, i - idx)

    return res


nums = [0, 1]  
solution = Solution()
print('findMaxLength: ', solution.findMaxLength(nums))
