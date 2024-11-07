import heapq
from typing import List

class Solution:
  def findKthLargest(self, nums: List[int], k: int) -> int:
    heap = []
    for num in nums:
      heapq.heappush(heap, num)
      if len(heap) > k:
        heapq.heappop(heap)

    return heap[0]
  

nums = [3,2,1,5,6,4]
k = 2
solution = Solution()
print('findKthLargest: ', solution.findKthLargest(nums, k)) # 5
