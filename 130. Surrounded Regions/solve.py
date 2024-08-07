from typing import List

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


board = [
  ["X", "X", "X", "X"],
  ["X", "O", "O", "X"],
  ["X", "X", "O", "X"],
  ["X", "O", "X", "X"]
]
solution = Solution()
print('solve: ', solution.solve(board))
