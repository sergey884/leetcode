from typing import List

class Solution:
  def longestConsecutive(self, nums: List[int]) -> int:
    numSet = set(nums)
    longest = 0

    for n in nums:
      if (n - 1) in numSet:
        continue
      length = 0
      while n in numSet:
        n += 1
        length += 1
      longest = max(longest, length)

    return longest


solution = Solution()
nums = [100, 4, 200, 1, 3, 2]
print('longestConsecutive: ', solution.longestConsecutive(nums))
