from math import ceil
from typing import List

class Solution:
  def minEatingSpeed(self, piles: List[int], h: int) -> int:
    left, right = 1, max(piles)
    minSpeed = right
    
    while left <= right:
      mid = (left + right) // 2
      hours = 0
      for i in range(len(piles)):
        hours += ceil(piles[i] / mid)
      if hours > h:
        left = mid + 1
      else:
        right = mid - 1
        minSpeed = mid
        
    return minSpeed
  

piles = [3, 6, 7, 11]
h = 8
solution = Solution()
print('minEatingSpeed: ', solution.minEatingSpeed(piles, h))
