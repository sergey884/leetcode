from typing import List

class Solution:
  def restoreMatrix(self, rowSum: List[int], colSum: List[int]) -> List[List[int]]:
    ROWS, COLS = len(rowSum), len(colSum)

    res = [[0] * COLS for _ in range(ROWS)]

    for r in range(ROWS):
      res[r][0] = rowSum[r]

    for c in range(COLS):
      currColSum = 0
      for r in range(ROWS):
        currColSum += res[r][c]

      r = 0
      while currColSum > colSum[c]:
        diff = currColSum - colSum[c]
        maxShift = min(res[r][c], diff)

        res[r][c] -= maxShift
        res[r][c + 1] += maxShift
        currColSum -= maxShift
        r += 1

    return res


rowSum = [5, 7, 10]
colSum = [8, 6, 8]
solution = Solution()
print('restoreMatrix: ', solution.restoreMatrix(rowSum, colSum))
