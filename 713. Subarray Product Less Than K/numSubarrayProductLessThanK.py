from typing import List

class Solution:
  def numSubarrayProductLessThanK(self, nums: List[int], k: int) -> int:
    if k <= 1:
      return 0
    
    count = 0
    product = 1
    left = 0
    
    for right in range(len(nums)):
      product *= nums[right]
      while product >= k:
        product /= nums[left]
        left += 1
      count += right - left + 1
      
    return count
      
nums = [10, 5, 2, 6]
k = 100
solution = Solution()
result = solution.numSubarrayProductLessThanK(nums, k)
print('numSubarrayProductLessThanK: ', result)
