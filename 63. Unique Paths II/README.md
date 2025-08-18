# [63. Unique Paths II](https://leetcode.com/problems/unique-paths-ii/description/)

You are given an `m x n` integer array `grid`. There is a robot initially located at the top-left corner (i.e., `grid[0][0]`). The robot tries to move to the **bottom-right corner** (i.e., `grid[m - 1][n - 1]`). The robot can only move either down or right at any point in time.

An obstacle and space are marked as `1` or `0` respectively in `grid`. A path that the robot takes cannot include **any** square that is an obstacle.

Return the number of possible unique paths that the robot can take to reach the bottom-right corner.

The testcases are generated so that the answer will be less than or equal to $2 * 10^{9}$.


### Example 1:
![](./images/robot1.jpg)
> Input: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
>
> Output: 2
>
> Explanation: There is one obstacle in the middle of the 3x3 grid above.
>
> There are two ways to reach the bottom-right corner:
>
> 1. Right -> Right -> Down -> Down
>
> 2. Down -> Down -> Right -> Right


### Example 2:
![](./images/robot2.jpg)
> Input: obstacleGrid = [[0,1],[0,0]]
>
> Output: 1
 

### Constraints:
- `m == obstacleGrid.length`
- `n == obstacleGrid[i].length`
- `1 <= m, n <= 100`
- `obstacleGrid[i][j]` is `0` or `1`.


## Solutions

### Performance

- **Time Complexity**: $O(N * M)$
- **Space Complexity**: $O(1)$

### Javascript

```javascript
const uniquePathsWithObstacles = (obstacleGrid) => {
  const M = obstacleGrid.length;
  const N = obstacleGrid[0].length;

  if (obstacleGrid[0][0] === 1) {
    return 0;
  }

  obstacleGrid[0][0] = 1;

  for (let i = 1; i < M; i++) {
    obstacleGrid[i][0] = obstacleGrid[i][0] === 1 ? 0 :  obstacleGrid[i - 1][0];
  }

  for (let j = 1; j < N; j++) {
    obstacleGrid[0][j] = obstacleGrid[0][j] === 1 ? 0 :  obstacleGrid[0][j - 1];
  }

  for (let i = 1; i < M; i++) {
    for (let j = 1; j < N; j++) {
      if (obstacleGrid[i][j] === 1) {
        obstacleGrid[i][j] = 0;
      } else {
        obstacleGrid[i][j] = obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1];
      }
    }
  }
  
  return obstacleGrid[M - 1][N - 1];
};
```

### Performance

- **Time Complexity**: $O(N * M)$
- **Space Complexity**: $O(N)$

### Python

```python
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
```
