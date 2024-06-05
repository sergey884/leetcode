class Solution:
  def singleNumber(self, nums: list[int]) -> int:
    res = 0

    for num in nums:
      res ^= num

    return res
  

nums = [4, 1, 2, 1, 2]
solution = Solution()
print('singleNumber: ', solution.singleNumber(nums))
