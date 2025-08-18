from typing import List

class Solution:
  def luckyNumbers (self, matrix: List[List[int]]) -> List[int]:
    if not matrix:
      return None
    
    ROWS, COLS = len(matrix), len(matrix[0])
    maxOfRowMins = float('-inf')

    for r in range(ROWS):
      minInRow = min(matrix[r])
      maxOfRowMins = max(maxOfRowMins, minInRow)

    for c in range(COLS):
      currMax = matrix[0][c]
      for r in range(ROWS):
        currMax = max(currMax, matrix[r][c])
      if currMax == maxOfRowMins:
        return [maxOfRowMins]
    
    return []


matrix = [
  [3, 7, 8],
  [9, 11, 13],
  [15, 16, 17]
]
solution = Solution()
print('luckyNumbers: ', solution.luckyNumbers(matrix))
