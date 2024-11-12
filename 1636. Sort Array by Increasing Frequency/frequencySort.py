from typing import List

class Solution:
  def frequencySort(self, nums: List[int]) -> List[int]:
    frequencyOfNums = {}
    for n in nums:
      if n not in frequencyOfNums:
        frequencyOfNums[n] = 0
      frequencyOfNums[n] += 1
      
    sortedNums = sorted(nums, key = lambda x: (frequencyOfNums[x], -x))
    
    return sortedNums
    
    
nums = [1, 1, 2, 2, 2, 3]
solution = Solution()
print('frequencySort: ', solution.frequencySort(nums))
