from typing import List

class Solution:
  def sortColors(self, nums: List[int]) -> None:
    """
    Do not return anything, modify nums in-place instead.
    """
    red_pos = 0
    blue_pos = len(nums) - 1
    curr_pos = 0
    
    while curr_pos <= blue_pos:
      if nums[curr_pos] == 0:
        nums[curr_pos], nums[red_pos] = nums[red_pos], nums[curr_pos]
        curr_pos += 1
        red_pos += 1
      elif nums[curr_pos] == 1:
        curr_pos += 1
      else:
        nums[curr_pos], nums[blue_pos] = nums[blue_pos], nums[curr_pos]
        blue_pos -= 1
    
    
nums = [2, 0, 2, 1, 1, 0]
solution = Solution()
print('sortColors: ', solution.sortColors(nums))
      