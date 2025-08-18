from typing import List

class Solution:
  def reverse(self, nums: List[int], left: int, right: int):
    while left < right:
      nums[left], nums[right] = nums[right], nums[left]
      left += 1
      right -= 1

  def nextPermutation(self, nums: List[int]) -> None:
    """
    Do not return anything, modify nums in-place instead.
    """
    n = len(nums)
    i = n - 2
    while i >= 0 and nums[i] >= nums[i + 1]:
      i -= 1

    if i >= 0:
      for j in range(n - 1, i, -1):
        if nums[j] > nums[i]:
          nums[i], nums[j] = nums[j], nums[i]
          break

    self.reverse(nums, i + 1, n - 1)

nums = [2, 3, 1]
solution = Solution()
print('nextPermutation: ', solution.nextPermutation(nums))
