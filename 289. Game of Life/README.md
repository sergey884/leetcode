# [289. Game of Life](https://leetcode.com/problems/game-of-life/description/)

According to [Wikipedia's article](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life): "**The Game of Life**, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). Each cell interacts with its [eight neighbors](https://en.wikipedia.org/wiki/Moore_neighborhood) (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

1. Any live cell with fewer than two live neighbors dies as if caused by under-population.
2. Any live cell with two or three live neighbors lives on to the next generation.
3. Any live cell with more than three live neighbors dies, as if by over-population.
4. Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously. Given the current state of the `m x n` grid `board`, return the next state.


### Example 1:
![](./images/grid1.jpg)
> Input: board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
>
> Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]


### Example 2:
![](./images/grid2.jpg)
> Input: board = [[1,1],[1,0]]
>
> Output: [[1,1],[1,1]]
 

### Constraints:
- `m == board.length`
- `n == board[i].length`
- `1 <= m, n <= 25`
- `board[i][j]` is `0` or `1`.


### Follow up:

- Could you solve it in-place? Remember that the board needs to be updated simultaneously: You cannot update some cells first and then use their updated values to update other cells.
- In this question, we represent the board using a 2D array. In principle, the board is infinite, which would cause problems when the active area encroaches upon the border of the array (i.e., live cells reach the border). How would you address these problems?


## Solutions

### Performance

- **Time Complexity**: `O(n * m)`
- **Space Complexity**: `O(1)`

### Javascript

```javascript
const gameOfLife = (board) => {
  // Original | New | State
  //     0    |  0  |   0
  //     1    |  0  |   1
  //     0    |  1  |   2
  //     1    |  1  |   3
  const ROWS = board.length;
  const COLS = board[0].length;

  const calculate = (r, c) => {
    let cnt = 0;
    const directions = [
      [0, 1], [0, -1], [1, 0], [-1, 0],
      [-1, -1], [1, -1], [-1, 1], [1, 1]
    ];

    for (let i = 0; i < directions.length; i++) {
      const [x, y] = directions[i];
      if (r + x < 0 || r + x >= ROWS || c + y < 0 || c + y >= COLS) {
        continue;
      }
      if (board[r + x][c + y] === 1 || board[r + x][c + y] === 3 ) {
        cnt++;
      }
    }

    return cnt;
  };

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      amountOfLiveCells = calculate(r, c);
      if (board[r][c]) {
        if (amountOfLiveCells === 2 || amountOfLiveCells === 3) {
          board[r][c] = 3;
        }
      } else {
        if (amountOfLiveCells === 3) {
          board[r][c] = 2;
        }
      }
    }
  }

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (board[r][c] === 2 || board[r][c] === 3) {
        board[r][c] = 1;
      } else if (board[r][c] === 1) {
        board[r][c] = 0;
      }
    }
  }

  return board;
};
```

### Performance

- **Time Complexity**: `O(n * m)`
- **Space Complexity**: `O(1)`

### Python

```python
class Solution:
  def gameOfLife(self, board: List[List[int]]) -> None:
    """
    Do not return anything, modify board in-place instead.
    """
    # Original | New | State
    #     0    |  0  |   0
    #     1    |  0  |   1
    #     0    |  1  |   2
    #     1    |  1  |   3
    ROWS, COLS = len(board), len(board[0])
    def calculate(r, c):
      cnt = 0
      directions = [
        [0, 1], [0, -1], [1, 0], [-1, 0],
        [-1, -1], [1, -1], [-1, 1], [1, 1]
      ]

      for x, y in directions:
        if r + x < 0 or c + y < 0 or r + x >= ROWS or c + y >= COLS:
          continue
        if board[r + x][c + y] in [1, 3]:
          cnt += 1

      return cnt

    for r in range(ROWS):
      for c in range(COLS):
        amountOfLiveCells = calculate(r, c)
        if board[r][c]: 
          if amountOfLiveCells in [2, 3]:
            board[r][c] = 3
        else:
          if amountOfLiveCells == 3:
            board[r][c] = 2

    for r in range(ROWS):
      for c in range(COLS):
        if board[r][c] in [2, 3]:
          board[r][c] = 1
        elif board[r][c] == 1:
          board[r][c] = 0

    return board
```
