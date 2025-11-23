# [64. Minimum Path Sum](https://leetcode.com/problems/minimum-path-sum/description/)

Given a `m x n` `grid` filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.


### Example 1:
![](./images/72.%20Edit%20Distance.jpg)
> Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
>
> Output: 7
>
> Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.


### Example 2:
> Input: grid = [[1,2,3],[4,5,6]]
>
> Output: 12
 

### Constraints:
- `m == grid.length`
- `n == grid[i].length`
- `1 <= m, n <= 200`
- `0 <= grid[i][j] <= 200`


## Solutions

### Performance

- **Time Complexity**: $O(ROWS * COLS)$
- **Space Complexity**: $O(ROWS * COLS)$

### Javascript

```javascript
const minPathSum = (grid) => {
	const ROWS = grid.length;
	const COLS = grid[0].length;
	const dp = Array(ROWS).fill(null).map(() => Array(COLS).fill(0));

	for (let r = ROWS - 1; r >= 0; r--) {
		for (let c = COLS - 1; c >= 0; c--) {
			if (r === ROWS - 1 && c !== COLS - 1) {
				dp[r][c] = grid[r][c] + dp[r][c + 1];
			} else if (r !== ROWS - 1 && c === COLS - 1) {
				dp[r][c] = grid[r][c] + dp[r + 1][c];
			} else if (r !== ROWS - 1 && c !== COLS - 1) {
				dp[r][c] = grid[r][c] + Math.min(dp[r + 1][c], dp[r][c + 1]);
			} else {
				dp[r][c] = grid[r][c];
			}
		}
	}

	return dp[0][0];
};
```

### Performance

- **Time Complexity**: $O(ROWS * COLS)$
- **Space Complexity**: $O(ROWS * COLS)$

### Python

```python
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
```
