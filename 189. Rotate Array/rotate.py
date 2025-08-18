from typing import List

class Solution:
  def reversArray(self, arr: List[int], left: int, right: int):
    while left < right:
      arr[left], arr[right] = arr[right], arr[left]
      left += 1
      right -= 1

  def rotate(self, nums: List[int], k: int) -> None:
    """
    Do not return anything, modify nums in-place instead.
    """
    k = k % len(nums)
    left, right = 0, len(nums) - 1
    self.reversArray(nums, left, right)
    
    left, right = 0, k - 1
    self.reversArray(nums, left, right)
    
    left, right = k, len(nums) - 1
    self.reversArray(nums, left, right)
    
nums = [1, 2, 3, 4, 5, 6, 7]
k = 3
solution = Solution()
print('rotate: ', solution.rotate(nums, k), nums)
