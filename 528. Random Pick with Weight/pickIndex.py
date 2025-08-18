import random
from typing import List

class Solution:
  def __init__(self, w: List[int]):
    self.prefixSum = []
    currSum = 0
    for weight in w:
      currSum += weight
      self.prefixSum.append(currSum)
    self.totalSum = currSum

  def pickIndex(self) -> int:
    target = self.totalSum * random.random()
    left, right = 0, len(self.prefixSum) - 1
    while left < right:
      mid = left + (right - left) // 2
      if target > self.prefixSum[mid]:
        left = mid + 1
      else:
        right = mid
    
    return left

# Your Solution object will be instantiated and called as such:
# obj = Solution(w)
# param_1 = obj.pickIndex()

w = [1, 3]
obj = Solution(w)
obj.pickIndex()
