# [463. Island Perimeter](https://leetcode.com/problems/island-perimeter/description/)

You are given `row x col` `grid` representing a map where `grid[i][j] = 1` represents land and `grid[i][j] = 0` represents water.

Grid cells are connected **horizontally/vertically** (not diagonally). The **grid** is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.


### Example 1:
![](./images/island.png)
> Input: grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
>
> Output: 16
>
> Explanation: The perimeter is the 16 yellow stripes in the image above.


### Example 2:
> Input: grid = [[1]]
>
> Output: 4


### Example 3:
> Input: grid = [[1,0]]
>
> Output: 4


### Constraints:
- `row == grid.length`
- `col == grid[i].length`
- `1 <= row, col <= 100`
- `grid[i][j]` is `0` or `1`.
- There is exactly one island in `grid`.


## Solutions

### Javascript
```javascript
const islandPerimeter = (grid) => {
  const m = grid.length;
  const n = grid[0].length;

  let islands = 0;
  let neighbors = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        islands++;
        if (i + 1 < m && grid[i + 1][j] === 1) {
          neighbors++;
        }

        if (j + 1 < n && grid[i][j + 1] === 1) {
          neighbors++;
        }
      }
    }
  }

  return islands * 4 - neighbors * 2;
};
```

### Javascript (Recursion)
```javascript
const islandPerimeter = (grid) => {
  const visited = new Set();
  const dfs = (i, j) => {
    if (i >= grid.length || j >= grid[0].length || i < 0 || j < 0 || grid[i][j] === 0) {
      return 1;
    }

    const visitedCellKey = `${i}-${j}`;
    if (visited.has(visitedCellKey)) {
      return 0;
    }

    visited.add(visitedCellKey);

    let perim = dfs(i, j + 1);
    perim += dfs(i + 1, j);
    perim += dfs(i, j - 1);
    perim += dfs(i - 1, j);

    return perim;
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        return dfs(i, j);
      }
    }
  }
};
```

### Python
```python
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
```

### Python (Recursion)
```python
class Solution:
  def islandPerimeter(self, grid: List[List[int]]) -> int:
    visited = set()

    def dfs(i, j):
      if i >= len(grid) or j >= len(grid[0]) or i < 0 or j < 0 or grid[i][j] == 0:
        return 1
      
      if (i, j) in visited:
        return 0
      
      visited.add((i, j))
      perim = dfs(i, j + 1)
      perim += dfs(i + 1, j)
      perim += dfs(i, j - 1)
      perim += dfs(i - 1, j)

      return perim
    
    for i in range(len(grid)):
      for j in range(len(grid[0])):
        if grid[i][j] == 1:
          return dfs(i, j)
```