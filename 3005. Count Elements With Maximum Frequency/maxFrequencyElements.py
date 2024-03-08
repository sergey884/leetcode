from typing import List

class Solution:
  def maxFrequencyElements(self, nums: List[int]) -> int:
    frequencyNums = {}
    maxFrequency = 0
    for num in nums:
      if num not in frequencyNums:
        frequencyNums[num] = 0
      frequencyNums[num] += 1
      maxFrequency = max(maxFrequency, frequencyNums[num])

    maxFreqCount = 0
    for val in frequencyNums.values():
      if val == maxFrequency:
        maxFreqCount += maxFrequency

    return maxFreqCount

nums = [1, 2, 2, 3, 1, 4]
solution = Solution()
print('maxFrequencyElements: ', solution.maxFrequencyElements(nums))
