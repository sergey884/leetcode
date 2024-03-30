from typing import List

class Solution:
  def countSubarrays(self, nums: List[int], k: int) -> int:
    max_n, max_cnt = max(nums), 0
    left, res = 0, 0
    
    for right in range(len(nums)):
      if nums[right] == max_n:
        max_cnt += 1
        
      while max_cnt > k or (left <= right and max_cnt == k and nums[left] != max_n):
        if nums[left] == max_n:
          max_cnt -= 1
        left += 1
        
      if max_cnt == k:
        res += left + 1
        
    return res

nums = [1, 3, 2, 3, 3]
k = 2
solution = Solution()
print('countSubarrays: ', solution.countSubarrays(nums, k))
          