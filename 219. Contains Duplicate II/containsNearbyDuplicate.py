from typing import List

class Solution:
  def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
    indexMap = {}
    for i in range(len(nums)):
      if nums[i] in indexMap and nums[i] == nums[indexMap[nums[i]]] and i - indexMap[nums[i]] <= k:
        return True
        
      indexMap[nums[i]] = i
      
    return False


nums = [1, 2, 3, 1]
k = 3
solution = Solution()
print('containsNearbyDuplicate: ', solution.containsNearbyDuplicate(nums, k))
