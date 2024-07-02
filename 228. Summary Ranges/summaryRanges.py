from typing import List

class Solution:
  def summaryRanges(self, nums: List[int]) -> List[str]:
    res = []
    temp = ''
    for i in range(len(nums)):
      if i + 1 < len(nums) and nums[i] + 1 == nums[i + 1]:
        temp += str(nums[i]) + '->'
      else:
        res.append(temp + str(nums[i]))
        temp = ''
        
    return res


nums = [0,1,2,4,5,7]
# ["0->2","4->5","7"]
solution = Solution()
print('summaryRanges: ', solution.summaryRanges(nums))
