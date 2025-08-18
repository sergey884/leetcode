from typing import List

class Solution:
  def sortPeople(self, names: List[str], heights: List[int]) -> List[str]:
    heightsToNames = {}
    
    for i in range(len(heights)):
      heightsToNames[heights[i]] = names[i]
    
    res = [] 
    for h in sorted(heights, reverse = True):
      res.append(heightsToNames[h])
    
    return res
    
names = ["Mary","John","Emma"]
heights = [180,165,170]
solution = Solution()
print('sortPeople: ', solution.sortPeople(names, heights))
