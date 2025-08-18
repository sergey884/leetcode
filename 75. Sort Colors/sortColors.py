from typing import List

class Solution:
  def sortColors(self, nums: List[int]) -> None:
    """
    Do not return anything, modify nums in-place instead.
    """
    red_pos, white_pos, blue_pos = -1, -1, -1
    for num in nums:
      if num == 0:
        red_pos += 1
        white_pos += 1
        blue_pos += 1
        nums[blue_pos] = 2
        nums[white_pos] = 1
        nums[red_pos] = 0
      elif num == 1:
        white_pos += 1
        blue_pos += 1
        nums[blue_pos] = 2
        nums[white_pos] = 1
      else:
        blue_pos += 1
        nums[blue_pos] = 2

  
nums = [2, 0, 2, 1, 1, 0]
solution = Solution()
print('sortColors: ', solution.sortColors(nums))
