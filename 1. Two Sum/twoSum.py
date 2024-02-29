from typing import List

class Solution:
  def twoSum(self, nums: List[int], target: int) -> List[int]:
    previousValues = {}

    for i in range(len(nums)):
      remainingSum = target - nums[i]

      if remainingSum in previousValues:
        return [previousValues[remainingSum], i]
      else:
        previousValues[nums[i]] = i

    return []
  
nums = [2, 7, 11, 15]
target = 9
solution = Solution()
print('twoSum: ', solution.twoSum(nums, target))