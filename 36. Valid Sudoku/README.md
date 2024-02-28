# [36. Valid Sudoku](https://leetcode.com/problems/valid-sudoku/description/)

Determine if a `9 x 9` Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

1. Each row must contain the digits `1-9` without repetition.
2. Each column must contain the digits `1-9` without repetition.
3. Each of the nine `3 x 3` sub-boxes of the grid must contain the digits `1-9` without repetition.

**Note:**

- A Sudoku board (partially filled) could be valid but is not necessarily solvable.
- Only the filled cells need to be validated according to the mentioned rules.


### Example 1:
![](./images/Sudoku-by-L2G-20050714.svg.png)
> Input: `board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]`
>
> Output: `true`

### Example 2:
> Input: `board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]`
>
> Output: `false`
>
> Explanation: `Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.`


### Constraints:
- `board.length == 9`
- `board[i].length == 9`
- `board[i][j] is a digit 1-9 or '.'.`


## Solutions

### Javascript
```javascript
const isValidSudoku = (board) => {
  const rows = new Map();
  const cols = new Map();
  const squars = new Map();

  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === '.') {
        continue;
      }

      if (!rows.has(row)) {
        rows.set(row, new Set());
      }

      if (!cols.has(col)) {
        cols.set(col, new Set());
      }

      let squareKey = `${Math.floor(row / 3)}-${Math.floor(col / 3)}`;

      if (!squars.has(squareKey)) {
        squars.set(squareKey, new Set());
      }

      let isInRows = rows.get(row).has(board[row][col]);
      let isInCols = cols.get(col).has(board[row][col]);
      let isInSquare = squars.get(squareKey).has(board[row][col]);

      if (isInRows || isInCols || isInSquare) {
        return false;
      }

      rows.get(row).add(board[row][col])
      cols.get(col).add(board[row][col]);
      squars.get(squareKey).add(board[row][col]);
    }
  }
  
  return true;
};
```

### Python
```python
class Solution:
  def isValidSudoku(self, board: List[List[str]]) -> bool:
    cols = defaultdict(set)
    rows = defaultdict(set)
    squares = defaultdict(set)

    for row in range(9):
      for col in range(9):
        if board[row][col] == '.':
          continue
        
        if (board[row][col] in rows[row] or
          board[row][col] in cols[col] or
          board[row][col] in squares[(row // 3, col // 3)]):
          return False
        
        rows[row].add(board[row][col])
        cols[col].add(board[row][col])
        squares[(row // 3, col // 3)].add(board[row][col])

    return True
```