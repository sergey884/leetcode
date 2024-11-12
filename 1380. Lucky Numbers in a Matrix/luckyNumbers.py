from typing import List

class Solution:
  def luckyNumbers (self, matrix: List[List[int]]) -> List[int]:
    if not matrix:
      return None
    
    ROWS = len(matrix)
    COLS = len(matrix[0])
    res = []
    minInRow = set()

    for r in range(ROWS):
      minInRow.add(min(matrix[r]))

    maxInCol = set()
    for c in range(COLS):
      currMax = matrix[0][c]
      for r in range(ROWS):
        currMax = max(currMax, matrix[r][c])
      maxInCol.add(currMax)

    for n in minInRow:
      if n in maxInCol:
        res.append(n) 

    return res


matrix = [
  [3, 7, 8],
  [9, 11, 13],
  [15, 16, 17]
]
solution = Solution()
print('luckyNumbers: ', solution.luckyNumbers(matrix))
