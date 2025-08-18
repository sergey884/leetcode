from typing import List

class Solution:
  def islandPerimeter(self, grid: List[List[int]]) -> int:
    m = len(grid)
    n = len(grid[0])

    islands = 0
    neighbors = 0

    for i in range(m):
      for j in range(n):
        if grid[i][j] == 1:
          islands +=1
          if i + 1 < m and grid[i + 1][j] == 1:
            neighbors += 1
          if j + 1 < n and grid[i][j + 1] == 1:
            neighbors += 1
    
    return islands * 4 - neighbors * 2
  
grid = [
  [0, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0]
]
solution = Solution()
print('islandPerimeter: ', solution.islandPerimeter(grid))
