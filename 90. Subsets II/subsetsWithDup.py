from typing import List

class Solution:
  def subsetsWithDup(self, nums: List[int]) -> List[List[int]]:
    nums.sort()
    currentSubset = []
    subsets = []
    
    def backtracking(currentSubset, index):
      subsets.append(currentSubset.copy())
      
      for i in range(index, len(nums)):
        if i != index and nums[i] == nums[i - 1]:
          continue
        
        currentSubset.append(nums[i])
        backtracking(currentSubset, i + 1)
        currentSubset.pop()
        
    backtracking(currentSubset, 0)
    return subsets
        

nums = [1, 2, 2]
solution = Solution()
print('subsetsWithDup: ', solution.subsetsWithDup(nums))
