from typing import List

class Solution:
  def permute(self, nums: List[int]) -> List[List[int]]:
    permutations = []
    l = len(nums)
    used = [False] * l
    
    def dfs(path):
      if len(path) == l:
        permutations.append(path.copy())
        return
      
      for i in range(l):
        if used[i]:
          continue
        
        used[i] = True
        path.append(nums[i])
        dfs(path)
        path.pop()
        used[i] = False
    
    dfs([])
    return permutations
        
        
nums = [1,2,3]
solution = Solution()
print('permute: ', solution.permute(nums))
