from typing import List

class Solution:
  def findCenter(self, edges: List[List[int]]) -> int:
    if edges[0][0] in edges[1]:
      return edges[0][0]
    return edges[0][1]


edges = [[1,2],[2,3],[4,2]]
solution = Solution()
print('findCenter: ', solution.findCenter(edges))
