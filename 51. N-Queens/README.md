# [51. N-Queens](https://leetcode.com/problems/n-queens/description/)

The **n-queens** puzzle is the problem of placing n queens on an `n x n` chessboard such that no two queens attack each other.

Given an integer `n`, return all distinct solutions to the **n-queens puzzle**. You may return the answer in **any order**.

Each solution contains a distinct board configuration of the n-queens' placement, where `'Q'` and `'.'` both indicate a queen and an empty space, respectively.


### Example 1:
![](./images/queens.jpg)
> Input: n = 4
>
> Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
>
> Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above


### Example 2:
> Input: n = 1
>
> Output: [["Q"]]
 

### Constraints:
- `1 <= n <= 9`


## Solutions

### Performance

- **Time Complexity**: $O(n!)$
- **Space Complexity**: $O(n^{2})$

### Javascript
```javascript
const solveNQueens = (n) => {
  const res = [];
  const board = Array(n).fill(null).map(() => Array(n).fill('.'));
  const diagonal = new Set();
  const antiDiagonal = new Set();
  const cols = new Set();

  const backtracking = (row) => {
    if (row === n) {
      res.push(board.map(row => row.join('')));
      return;
    }

    for (let col = 0; col < n; col++) {
      const currDiagonal = row - col;
      const currAntiDiagonal = row + col;

      if (cols.has(col) || diagonal.has(currDiagonal) || antiDiagonal.has(currAntiDiagonal)) {
        continue;
      }

      board[row][col] = 'Q';
      cols.add(col);
      diagonal.add(currDiagonal);
      antiDiagonal.add(currAntiDiagonal);

      backtracking(row + 1);

      board[row][col] = '.';
      cols.delete(col);
      diagonal.delete(currDiagonal);
      antiDiagonal.delete(currAntiDiagonal);
    }
  };

  backtracking(0);
  return res;
};
```

### Performance

- **Time Complexity**: $O(n!)$
- **Space Complexity**: $O(n^{2})$

### Python
```python
class Solution:
  def solveNQueens(self, n: int) -> List[List[str]]:
    emptyBoard = [['.'] * n for _ in range(n)]
    diagonal = set()
    antiDiagonal = set()
    cols = set()
    res = []
    
    def creatBoard(board):
      res = []
      for row in range(n):
        res.append(''.join(board[row]))
      
      return res
    
    def backtracking(row, diagonal, antiDiagonal, cols, board):
      if row == n:
        res.append(creatBoard(board))
        return 
      
      for col in range(n):
        currDiagonal = row - col
        currAntiDiagonal = row + col
        
        if (col in cols or
          currDiagonal in diagonal or
          currAntiDiagonal in antiDiagonal):
          continue
        
        board[row][col] = 'Q'
        diagonal.add(currDiagonal)
        antiDiagonal.add(currAntiDiagonal)
        cols.add(col)
        
        backtracking(row + 1, diagonal, antiDiagonal, cols, board)
        
        board[row][col] = '.'
        diagonal.remove(currDiagonal)
        antiDiagonal.remove(currAntiDiagonal)
        cols.remove(col)

    backtracking(0, diagonal, antiDiagonal, cols, emptyBoard)
    return res
```