from typing import List
from collections import defaultdict

class Solution:
  def isValidSudoku(self, board: List[List[str]]) -> bool:
    cols = defaultdict(set)
    rows = defaultdict(set)
    squares = defaultdict(set)

    for row in range(9):
      for col in range(9):
        num = board[row][col]
        if num == '.':
          continue
        
        if (num in rows[row] or
          num in cols[col] or
          num in squares[(row // 3, col // 3)]):
          return False

        rows[row].add(num)
        cols[col].add(num)
        squares[(row // 3, col // 3)].add(num)

    return True
  
solution = Solution()
board = [
  ["5","3",".",".","7",".",".",".","."]
 ,["6",".",".","1","9","5",".",".","."]
 ,[".","9","8",".",".",".",".","6","."]
 ,["8",".",".",".","6",".",".",".","3"]
 ,["4",".",".","8",".","3",".",".","1"]
 ,["7",".",".",".","2",".",".",".","6"]
 ,[".","6",".",".",".",".","2","8","."]
 ,[".",".",".","4","1","9",".",".","5"]
 ,[".",".",".",".","8",".",".","7","9"]
]
print('isValidSudoku: ', solution.isValidSudoku(board))
