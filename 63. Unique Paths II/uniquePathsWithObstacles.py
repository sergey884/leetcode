from typing import List

class Solution:
  def uniquePathsWithObstacles(self, obstacleGrid: List[List[int]]) -> int:
    M, N = len(obstacleGrid), len(obstacleGrid[0])
    dp = [0] * N
    dp[0] = 1

    for i in range(M):
      for j in range(N):
        if obstacleGrid[i][j] == 1:
          dp[j] = 0
        elif j > 0:
          dp[j] += dp[j - 1]

    return dp[-1]
  

obstacleGrid = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0]
]
solution = Solution()
print('uniquePathsWithObstacles: ', solution.uniquePathsWithObstacles(obstacleGrid)) # 2
