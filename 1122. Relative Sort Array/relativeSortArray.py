from typing import List

class Solution:
  def relativeSortArray(self, arr1: List[int], arr2: List[int]) -> List[int]:
    arr2_set = set(arr2)
    arr1_cnt = {}
    end = []

    for i in range(len(arr1)):
      if arr1[i] not in arr1_cnt:
        arr1_cnt[arr1[i]] = 0
      arr1_cnt[arr1[i]] += 1
      if arr1[i] not in arr2_set:
        end.append(arr1[i])
        
    end.sort()
    
    res = []
    for n in arr2:
      for _ in range(arr1_cnt[n]):
        res.append(n)
        
    return res + end
    
    
arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19]
arr2 = [2, 1, 4, 3, 9, 6]
solution = Solution()
print('relativeSortArray: ', solution.relativeSortArray(arr1, arr2))
