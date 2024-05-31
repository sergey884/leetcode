from typing import List

class UnionFind:
  def __init__(self, n: int) -> None:
    self.id = [i for i in range(n)]
    self.rank = [0] * n

  def union(self, x: int, y: int) -> None:
    rootX = self.find(x)
    rootY = self.find(y)

    if rootX == rootY:
      return False

    if self.rank[rootX] < self.rank[rootY]:
      self.id[rootX] = rootY
    elif self.rank[rootX] > self.rank[rootY]:
      self.id[rootY] = rootX
    else:
      self.id[rootX] = rootY
      self.rank[rootY] += 1
    
    return True

  def find(self, x: int) -> int:
    if self.id[x] != x:
      self.id[x] = self.find(self.id[x])
    return self.id[x]
  
class Solution:
  def findRedundantConnection(self, edges: List[List[int]]) -> List[int]:
    uf = UnionFind(len(edges) + 1)

    for u, v in  edges:
      if not uf.union(u, v):
        return [u, v]
      

edges = [[1,2],[1,3],[2,3]]
solution = Solution()
print('findRedundantConnection: ', solution.findRedundantConnection(edges))
