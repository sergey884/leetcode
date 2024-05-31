from typing import List

class UnionFind:
  def __init__(self, n: int) -> None:
    self.id = [i for i in range(n)]
    self.rank = [0] * n

  def union(self, x: int, y: int) -> None:
    rootX = self.find(x)
    rootY = self.find(y)

    if rootX == rootY:
      return

    if self.rank[rootX] < self.rank[rootY]:
      self.id[rootX] = rootY
    elif self.rank[rootX] > self.rank[rootY]:
      self.id[rootY] = rootX
    else:
      self.id[rootX] = rootY
      self.rank[rootY] += 1

  def find(self, x: int) -> int:
    if self.id[x] != x:
      self.id[x] = self.find(self.id[x])
    return self.id[x]


class Solution:
  def validPath(self, n: int, edges: List[List[int]], source: int, destination: int) -> bool:
    uf = UnionFind(n)

    for u, v in edges:
      uf.union(u, v)

    return uf.find(source) == uf.find(destination)
  

n = 6
edges = [[0,1],[0,2],[3,5],[5,4],[4,3]]
source = 0
destination = 5

solution = Solution()
print('validPath: ', solution.validPath(n, edges, source, destination))
