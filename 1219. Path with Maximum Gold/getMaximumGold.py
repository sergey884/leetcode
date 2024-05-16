from typing import List

class Solution:
  def getMaximumGold(self, grid: List[List[int]]) -> int:
    ROWS, COLS = len(grid), len(grid[0])
    
    def dfs(i, j):
      if i < 0 or j < 0 or i >= ROWS or j >= COLS:
        return 0
      
      if grid[i][j] == 0:
        return 0
      
      gold = grid[i][j]
      grid[i][j] = 0
      
      up = dfs(i - 1, j)
      down = dfs(i + 1, j)
      left = dfs(i, j - 1)
      right = dfs(i, j + 1)