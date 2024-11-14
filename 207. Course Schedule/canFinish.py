from typing import List

class Solution:
  def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
    preMap = { i: [] for i in range(numCourses) }
    for crs, pre in prerequisites:
      preMap[crs].append(pre)
    
    visited = set()
    def dfs(crs):
      if crs in visited:
        return False
      
      if preMap[crs] == []:
        return True
      
      visited.add(crs)
      for pre in preMap[crs]:
        if not dfs(pre):
          return False
      visited.remove(crs)
      preMap[crs] = []
      return True
    
    for crs in range(numCourses):
      if not dfs(crs):
          return False

    return True
  

numCourses = 2
prerequisites = [[1,0]]
solution = Solution()
print('canFinish: ', solution.canFinish(numCourses, prerequisites))
