from typing import List

class Solution:
  def subarraySum(self, nums: List[int], k: int) -> int:
    count = 0
    currSum = 0
    prefixSum = { 0: 1 }

    for n in nums:
      currSum += n
      diff = currSum - k
      if diff in prefixSum:
        count += prefixSum[diff]
      prefixSum[currSum] = prefixSum.get(currSum, 0) + 1
    
    return count
  

nums = [1, 1, 1]
k = 2
solution = Solution()
print('subarraySum: ', solution.subarraySum(nums, k)) # 2
