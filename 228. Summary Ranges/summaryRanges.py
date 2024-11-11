from typing import List

class Solution:
  def summaryRanges(self, nums: List[int]) -> List[str]:
    if not nums:
      return []

    res = []
    rangeStart = nums[0]

    for i in range(1, len(nums)):
      if nums[i - 1] + 1 != nums[i]:
        if rangeStart == nums[i - 1]:
          res.append(str(nums[i - 1]))
        else:
          res.append(f"{rangeStart}->{nums[i - 1]}")
        rangeStart =  nums[i]
        
    if rangeStart == nums[-1]:
      res.append(str(nums[-1]))
    else:
      res.append(f"{rangeStart}->{nums[-1]}")
        
    return res


nums = [0, 1, 2, 4, 5, 7]
# ["0->2","4->5","7"]
solution = Solution()
print('summaryRanges: ', solution.summaryRanges(nums))
