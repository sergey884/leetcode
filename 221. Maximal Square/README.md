# [221. Maximal Square](https://leetcode.com/problems/maximal-square/description/)

Given an `m x n` binary `matrix` filled with `0`'s and `1`'s, find the largest square containing only 1's and return its area.


### Example 1:
![](./images/max1grid.jpg)
> Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
>
> Output: 4


### Example 2:
![](./images/max2grid.jpg)
> Input: matrix = [["0","1"],["1","0"]]
>
> Output: 1


### Example 3:
> Input: matrix = [["0"]]
>
> Output: 0
 

### Constraints:
- `m == matrix.length`
- `n == matrix[i].length`
- `1 <= m, n <= 300`
- `matrix[i][j]` is `'0'` or `'1'`.


## Solutions

### Javascript
```javascript
const maximalSquare = (matrix) => {
  const ROWS = matrix.length;
  const COLS = matrix[0].length;
  const cache = {};

  const helper = (row, col) => {
    if (row >= ROWS || col >= COLS) {
      return 0;
    }

    const cacheKey = `${row}-${col}`;
    if (!cache[cacheKey]) {
      let down = helper(row + 1, col);
      let right = helper(row, col + 1);
      let diag = helper(row + 1, col + 1);

      cache[cacheKey] = 0;
      if (matrix[row][col] === '1') {
        cache[cacheKey] = 1 + Math.min(down, right, diag);
      }
    }

    return cache[cacheKey];
  }

  helper(0, 0);

  return Math.max(...Object.values(cache)) ** 2;
};
```

### Python
```python
class Solution:
  def maximalSquare(self, matrix: List[List[str]]) -> int:
    ROWS, COLS = len(matrix), len(matrix[0])
    cache = {} # (c, r) -> maxArea
    
    def helper(r, c):
      if r  >= ROWS or c >= COLS:
        return 0
      
      if (r, c) not in cache:
        down = helper(r + 1, c)
        right = helper(r, c + 1)
        diag = helper(r + 1, c + 1)
        
        cache[(r, c)] = 0
        if matrix[r][c] == '1':
          cache[(r, c)] = 1 + min(down, right, diag)
          
      return cache[(r, c)]
    
    helper(0, 0)
    return max(cache.values()) ** 2
```