from collections import deque
from typing import List

class Solution:
  def maximumSafenessFactor(self, grid: List[List[int]]) -> int:
    N = len(grid)
    
    def precompute():
      q = deque()
      minDist = {}
      
      for r in range(N):
        for c in range(N):
          if grid[r][c]:
            q.append((r, c, 0))
            minDist[(r, c)] = 0
            
      while q:
        r, c, dist = q.popleft()
        neibhors = [[r + 1, c], [r - 1, c], [r, c + 1], [r, c - 1]]
        for r2, c2 in neibhors:
          if (r2, c2) not in minDist:
            minDist[(r2, c2)] = dist + 1
            q.append((r2, c2, dist + 1))
            
      return minDist
        