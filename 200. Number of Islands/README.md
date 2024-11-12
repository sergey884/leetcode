# [200. Number of Islands](https://leetcode.com/problems/number-of-islands/description/)

Given an `m x n` 2D binary grid `grid` which represents a map of `'1'`s (land) and `'0'`s (water), return the number of islands.

An **island** is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

### Example 1:

> Input: grid = [
>
> ["1","1","1","1","0"],
>
> ["1","1","0","1","0"],
>
> ["1","1","0","0","0"],
>
> ["0","0","0","0","0"]
>
> ]
>
> Output: 1

### Example 2:

> Input: grid = [
>
> ["1","1","0","0","0"],
>
> ["1","1","0","0","0"],
>
> ["0","0","1","0","0"],
>
> ["0","0","0","1","1"]
>
> ]
>
> Output: 3

### Constraints:

- `m == grid.length`
- `n == grid[i].length`
- `1 <= m, n <= 300`
- `grid[i][j]` is `'0'` or `'1'`.

## Solutions

### Performance

- **Time Complexity**: $O(ROWS * COLS)$
- **Space Complexity**: $O(ROWS * COLS)$

### Javascript

```javascript
const numIslands = (grid) => {
  const ROWS = grid.length;
  const COLS = grid[0].length;
  const visited = new Set();
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  const bfs = (row, col) => {
    const queue = [[row, col]];
    visited.add(`${row}-${col}`);

    while (queue.length) {
      const [row, col] = queue.pop();

      for (let i = 0; i < directions.length; i++) {
        const [dr, dc] = directions[i];
        const r = row + dr;
        const c = col + dc;

        if (
          r >= 0 &&
          r < ROWS &&
          c >= 0 &&
          c < COLS &&
          grid[r][c] === "1" &&
          !visited.has(`${r}-${c}`)
        ) {
          queue.push([r, c]);
          visited.add(`${r}-${c}`);
        }
      }
    }
  };

  let islands = 0;
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (grid[r][c] === "1" && !visited.has(`${r}-${c}`)) {
        bfs(r, c);
        islands++;
      }
    }
  }

  return islands;
};
```

### Performance

- **Time Complexity**: $O(ROWS * COLS)$
- **Space Complexity**: $O(ROWS * COLS)$

### Python

```python
class Solution:
  def numIslands(self, grid: List[List[str]]) -> int:
    if not grid:
      return 0

    ROWS, COLS = len(grid), len(grid[0])
    visited = set()
    islands = 0

    def bfs(r, c):
      q = deque()
      visited.add((r, c))
      q.append((r, c))

      while q:
        row, col = q.popleft()
        directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]

        for dr, dc in directions:
          r, c = row + dr, col + dc
          if (r in range(ROWS) and
            c in range(COLS) and
            grid[r][c] == '1' and
            (r, c) not in visited):
            q.append((r, c))
            visited.add((r, c))

    for r in range(ROWS):
      for c in range(COLS):
        if grid[r][c] == '1' and (r, c) not in visited:
          bfs(r, c)
          islands += 1

    return islands
```
