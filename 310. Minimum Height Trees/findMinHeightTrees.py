from typing import List

class Solution:
  def findMinHeightTrees(self, n: int, edges: List[List[int]]) -> List[int]:
    graph = {}
    for u, v in edges:
      if u not in graph:
        graph[u] = []
      if v not in graph:
        graph[v] = []
      graph[u].append(v)
      graph[v].append(u)
      
    minHeight = float('inf')
    res = []
    visited = set()

    def dfs(node):
      if node in visited:
        return 0
      
      visited.add(node)
      maxHeight = 0
      if node in graph:
        for v in graph[node]:
          height = dfs(v)
          maxHeight = max(maxHeight, height)
      
      return maxHeight + 1
    
    for root in range(n):
      height = dfs(root)
      if height < minHeight:
        minHeight = height
        res = [root]
      elif height == minHeight:
        res.append(root)
        
    return res
        
n = 4
edges = [[1,0],[1,2],[1,3]]      
solution = Solution()
print('findMinHeightTrees: ', solution.findMinHeightTrees(n, edges))
      