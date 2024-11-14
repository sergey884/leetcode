from typing import List

class Solution:
  def combine(self, n: int, k: int) -> List[List[int]]:
    ans = []
    
    def dfs(s, path):
      if len(path) == k:
        ans.append(path.copy())
        return
      
      for i in range(s, n + 1):
        path.append(i)
        dfs(i + 1, path)
        path.pop()
        
    dfs(1, [])
    return ans
  
  
n = 4
k = 2
solution = Solution()
print('combine: ', solution.combine(4, 2))
