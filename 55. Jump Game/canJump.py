class Solution:
  def canJump(self, nums: list[int]) -> bool:
    goal = len(nums) - 1

    for i in range(len(nums) - 1, -1, -1):
      if i + nums[i] >= goal:
        goal = i

    return goal == 0


nums = [2, 3, 1, 1, 4]
solution = Solution()
print('canJump: ', solution.canJump(nums))
