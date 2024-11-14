# [130. Surrounded Regions](https://leetcode.com/problems/surrounded-regions/description/)

You are given an `m x n` matrix `board` containing **letters** `'X'` and `'O'`, **capture regions** that are **surrounded**:

- **Connect:** A cell is connected to adjacent cells horizontally or vertically.
- **Region:** To form a region **connect every** `'O'` cell.
- **Surround:** The region is surrounded with `'X'` cells if you can **connect the region** with `'X'` cells and none of the region cells are on the edge of the `board`.

A **surrounded region is captured** by replacing all `'O'`s with `'X'`s in the input matrix `board`.


### Example 1:
> Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
>
> Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
> Explanation:
> ![](./images/xogrid.jpg)
> In the above diagram, the bottom region is not captured because it is on the edge of the board and cannot be surrounded.


### Example 2:
> Input: board = [["X"]]
>
> Output: [["X"]]

 
### Constraints:
- `m == board.length`
- `n == board[i].length`
- `1 <= m, n <= 200`
- `board[i][j]` is `'X'` or `'O'`.


## Solutions

### Performance

- **Time Complexity**: `O(n * m)`
- **Space Complexity**: `O(1)`

### Javascript

```javascript
const solve = (board) => {
  if (!board) {
    return;
  }

  const ROWS = board.length;
  const COLS = board[0].length;

  const dfs = (r, c) => {
    if (r < 0 || c < 0 || r === ROWS || c === COLS || board[r][c] !== 'O') {
      return;
    }

    board[r][c] = '*';
    dfs(r - 1, c);
    dfs(r + 1, c);
    dfs(r, c - 1);
    dfs(r, c + 1);
  };

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if ((r === 0 || r === ROWS - 1 || c === 0 || c === COLS - 1) && board[r][c] === 'O') {
        dfs(r, c);
      }
    }
  }
    
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (board[r][c] === 'O') {
        board[r][c] = 'X';
      } else if (board[r][c] === '*') {
        board[r][c] = 'O';
      }
    }
  }
};
```

### Performance

- **Time Complexity**: `O(n * m)`
- **Space Complexity**: `O(1)`

### Python

```python
class Solution:
  def solve(self, board: List[List[str]]) -> None:
    """
    Do not return anything, modify board in-place instead.
    """
    if not board:
      return
    
    ROWS, COLS = len(board), len(board[0])

    def dfs(r, c):
      if r < 0 or c < 0 or r == ROWS or c == COLS or board[r][c] != 'O':
        return
      
      board[r][c] = '*'
      dfs(r + 1, c)
      dfs(r - 1, c)
      dfs(r, c - 1)
      dfs(r, c + 1)

    for r in range(ROWS):
      for c in range(COLS):
        if (r in [0, ROWS - 1] or c in [0, COLS - 1]) and board[r][c] == 'O':
          dfs(r, c)

    for r in range(ROWS):
      for c in range(COLS):
        if board[r][c] == 'O':
          board[r][c] = 'X'
        elif board[r][c] == '*':
          board[r][c] = 'O'
```
