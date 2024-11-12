from typing import List
from collections import deque

class Solution:
  def deckRevealedIncreasing(self, deck: List[int]) -> List[int]:
    res = [0] * len(deck)
    deck.sort()
    q = deque(range(len(deck)))
    
    for n in deck:
      i = q.popleft()
      res[i] = n
      
      if q:
        q.append(q.popleft())
      
    return res


deck = [17, 13, 11, 2, 3, 5, 7]
solution = Solution()
print('deckRevealedIncreasing: ', solution.deckRevealedIncreasing(deck))
