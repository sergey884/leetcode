from typing import List

class Solution:
  def findMinArrowShots(self, points: List[List[int]]) -> int:
    points.sort(key = lambda x: x[1])
    amountOfArrows = 0
    arrowX = float('-inf')

    for point in points:
      [start, end] = point
      if start > arrowX:
        amountOfArrows += 1
        arrowX = end

    return amountOfArrows


points = [[10, 16], [2, 8], [1, 6], [7, 12]]
solution = Solution()
print('findMinArrowShots: ', solution.findMinArrowShots(points))
