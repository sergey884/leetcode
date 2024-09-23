from typing import List

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
  

n = 4 
solution = Solution()
print('solveNQueens: ', solution.solveNQueens(n))
