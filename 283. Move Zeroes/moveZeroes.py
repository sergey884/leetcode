class Solution:
  def moveZeroes(self, nums: list[int]) -> None:
    """
    Do not return anything, modify nums in-place instead.
    """
    nonZeroIndex = 0

    for i in range(len(nums)):
      if nums[i] != 0:
        nums[nonZeroIndex] = nums[i]
        nonZeroIndex += 1

    for i in range(nonZeroIndex, len(nums)):
      nums[i] = 0

nums = [0, 1, 0, 3, 12]
solution = Solution()
print('moveZeroes: ', solution.moveZeroes(nums))