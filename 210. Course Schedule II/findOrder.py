from collections import deque
from typing import List

class Solution:
  def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
    graph = { i: [] for i in range(numCourses) } 
    indegree = { i: 0 for i in range(numCourses) }
    
    for dest, src in prerequisites:
      graph[src].append(dest)
      indegree[dest] += 1
      
    queue = deque([i for i in indegree if indegree[i] == 0])
    
    res = []
    while queue:
      node = queue.popleft()
      res.append(node)
      for neighbor in graph[node]:
        indegree[neighbor] -= 1
        if indegree[neighbor] == 0:
          queue.append(neighbor)
          
    return res if len(res) == numCourses else []


numCourses = 4
prerequisites = [[1, 0], [2, 0], [3, 1], [3, 2]]
solution = Solution()
print('findOrder: ', solution.findOrder(numCourses, prerequisites))
