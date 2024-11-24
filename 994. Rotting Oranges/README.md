# [994. Rotting Oranges](https://leetcode.com/problems/rotting-oranges/description)

You are given an `m x n` `grid` where each cell can have one of three values:
- `0` representing an empty cell,
- `1` representing a fresh orange, or
- `2` representing a rotten orange.
Every minute, any fresh orange that is **4-directionally adjacent** to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return `-1`.


### Example 1:
![](./images/oranges.png)
> Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
>
> Output: 4


### Example 2:
> Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
>
> Output: -1
>
> Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.


### Example 3:
> Input: grid = [[0,2]]
>
> Output: 0
>
> Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.
 

### Constraints:
- `m == grid.length`
- `n == grid[i].length`
- `1 <= m, n <= 10`
- `grid[i][j]` is `0`, `1`, or `2`.


## Solutions

### Performance

- **Time Complexity**: $O(ROWS * COLS)$
- **Space Complexity**: $O(ROWS * COLS)$

### Javascript
```javascript
const orangesRotting = (grid) => {
  const ROWS = grid.length;
  const COLS = grid[0].length;
  const queue = [];
  let freshOranges = 0;
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      if (grid[i][j] === 1) {
        freshOranges++;
      }
      if (grid[i][j] === 2) {
        queue.push([i, j]);
      }
    }
  }

  queue.push([-1, -1]);

  let minutesPassed = -1;
  while (queue.length) {
    const [row, col] = queue.shift();

    if (row === -1) {
      minutesPassed++;
      if (queue.length) {
        queue.push([-1, -1]);
      }
    } else {
      for (let d = 0; d < directions.length; d++) {
        const [dr, dc] = directions[d];
        const r = row + dr;
        const c = col + dc;
        if (r >= 0 && r < ROWS && c >= 0 && c < COLS) {
          if (grid[r][c] === 1) {
            grid[r][c] = 2;
            freshOranges--;
            queue.push([r, c]);
          }
        }
      }
    }
  }

  return freshOranges === 0 ? minutesPassed : -1;
};
```

### Performance

- **Time Complexity**: $O(ROWS * COLS)$
- **Space Complexity**: $O(ROWS * COLS)$

### Python
```python

```