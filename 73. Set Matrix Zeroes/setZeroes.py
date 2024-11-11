from typing import List

class Solution:
  def setZeroes(self, matrix: List[List[int]]) -> None:
    """
    Do not return anything, modify matrix in-place instead.
    """
    ROWS = len(matrix)
    COLS = len(matrix[0])
    firstRowHasZero = False
    firstColHasZero = False
    
    for r in range(ROWS):
      if matrix[r][0] == 0:
        firstColHasZero = True
        break
    
    for c in range(COLS):
      if matrix[0][c] == 0:
        firstRowHasZero = True
        break 
      
    for r in range(ROWS):
      for c in range(COLS):
        if matrix[r][c] == 0:
          matrix[r][0] = 0
          matrix[0][c] = 0
     
    for r in range(1, ROWS):
      for c in range(1, COLS):
        if matrix[r][0] == 0 or matrix[0][c] == 0:
          matrix[r][c] = 0
         
    if firstColHasZero: 
      for r in range(ROWS):
        matrix[r][0] = 0
        
    if firstRowHasZero:
      for c in range(COLS):
        matrix[0][c] = 0
        
        
matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1]
]
solution = Solution()
print('setZeroes: ', solution.setZeroes(matrix))
