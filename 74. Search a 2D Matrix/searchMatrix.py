from typing import List
class Solution:
  def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
    ROWS, COLS = len(matrix), len(matrix[0])
    
    top, bottom = 0, ROWS - 1
    while top <= bottom:
      row = (top + bottom) // 2
      if target < matrix[row][0]:
        bottom = row - 1
      elif target > matrix[row][-1]:
        top = row + 1
      else:
        break
   
    if top > bottom:
      return False
         
    row = (top + bottom) // 2

    left, right = 0, COLS - 1
    while left <= right:
      mid = (left + right) // 2
      if target < matrix[row][mid]:
        right = mid - 1
      elif target > matrix[row][mid]:
        left = mid + 1
      else:
        return True
      
    return False
        
        
matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60]
]
target = 33
solution = Solution()
print('searchMatrix: ', solution.searchMatrix(matrix, target))