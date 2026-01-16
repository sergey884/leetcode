from typing import List
import heapq
import math

class Solution:
  def pickGifts(self, gifts: List[int], k: int) -> int:
    gifts_heap = [-gift for gift in gifts]
    heapq.heapify(gifts_heap)
    
    for _ in range(k):
      max_pile = -heapq.heappop(gifts_heap)
      updated_pile = math.floor(math.sqrt(max_pile))
      heapq.heappush(gifts_heap, -updated_pile)
    
    number_of_remaining_gifts = 0
    while gifts_heap:
      number_of_remaining_gifts -= heapq.heappop(gifts_heap)
      
    return number_of_remaining_gifts
  

gifts = [25, 64, 9, 4, 100]
k = 4
solution = Solution()
print('pickGifts: ', solution.pickGifts(gifts, k)) # 29