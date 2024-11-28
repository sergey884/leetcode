from typing import List, Set

class Solution:
  def getAncestors(self, n: int, edges: List[List[int]]) -> List[List[int]]:
    ans = [[] for _ in range(n)]
    graph = [[] for _ in range(n)]

    for u, v in edges:
      graph[u].append(v)

    def dfs(u: int, ancestor: int, seen: Set[int]) -> None:
      seen.add(u)
      for v in graph[u]:
        if v in seen:
          continue
        ans[v].append(ancestor)
        dfs(v, ancestor, seen)

    for i in range(n):
      dfs(i, i, set())

    return ans


n = 5
edgeList = [[0,1], [0,2], [0,3], [0,4], [1,2], [1,3], [1,4], [2,3], [2,4], [3,4]]
solution = Solution()
print('getAncestors: ', solution.getAncestors(n, edgeList))
