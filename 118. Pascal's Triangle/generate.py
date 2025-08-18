from typing import List

class Solution:
  def generate(self, numRows: int) -> List[List[int]]:
    triangle = []

    for i in range(numRows):
      rows = [None for _ in range(i + 1)]
      rows[0], rows[-1] = 1, 1
      for j in range(1, i):
        rows[j] = triangle[i - 1][j - 1] + triangle[i - 1][j]
      triangle.append(rows)

    return triangle


numRows = 5
solution = Solution()
print("generate: ", solution.generate(numRows)) # [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
