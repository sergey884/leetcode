from typing import List

class Solution:
  def sortedSquares(self, nums: List[int]) -> List[int]:
    res = []
    left, right = 0, len(nums) - 1

    while left <= right:
      if nums[left] ** 2 > nums[right] ** 2:
        res.append(nums[left] ** 2)
        left += 1
      else:
        res.append(nums[right] ** 2)
        right -= 1

    return res[::-1]
  
nums = [-4, -1, 0, 3, 10]
solution = Solution()
print('sortedSquares: ', solution.sortedSquares(nums))
