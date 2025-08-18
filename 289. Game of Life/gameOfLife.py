from typing import List

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


board = [
  [0, 1, 0],
  [0, 0, 1],
  [1, 1, 1],
  [0, 0, 0]
]
solution = Solution()
print('gameOfLife: ', solution.gameOfLife(board))
