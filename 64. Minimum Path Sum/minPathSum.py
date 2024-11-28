from typing import List

class Solution:
  def minPathSum(self, grid: List[List[int]]) -> int:
    ROWS = len(grid)
    COLS = len(grid[0])

    dp = [[0] * COLS for _ in range(ROWS)]

    for r in range(ROWS - 1, -1, -1):
      for c in range(COLS - 1, -1, -1):
        if r == ROWS - 1 and c != COLS - 1:
          dp[r][c] = grid[r][c] + dp[r][c + 1]
        elif r != ROWS - 1 and c == COLS - 1:
          dp[r][c] = grid[r][c] + dp[r + 1][c]
        elif r != ROWS - 1 and c != COLS - 1:
          dp[r][c] = grid[r][c] + min(dp[r][c + 1], dp[r + 1][c])
        else:
          dp[r][c] = grid[r][c]

    return dp[0][0]


grid = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1]
]
solution = Solution()
print('minPathSum: ', solution.minPathSum(grid))
