from typing import List

class Solution:
  def numberOfSubarrays(self, nums: List[int], k: int) -> int:
    left = 0
    middle = 0
    odd_cnt = 0
    res = 0
  
    for right in range(len(nums)):
      if nums[right] % 2:
        odd_cnt += 1
      
      while odd_cnt > k:
        if nums[left] % 2:
          odd_cnt -= 1
        left += 1
        middle = left
        
      if odd_cnt == k:
        while not nums[middle] % 2:
          middle += 1
        res += (middle - left) + 1
      
    return res

 
nums = [1, 1, 2, 1, 1]
k = 3
solution = Solution()
print('numberOfSubarrays: ', solution.numberOfSubarrays(nums, k))
