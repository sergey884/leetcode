from typing import List

class Solution:
  def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
    nums1Map = {}
    res = []
    for n in nums1:
      if n not in nums1Map:
        nums1Map[n] = 0
      nums1Map[n] += 1
        
    for n in nums2:
      if n in nums1Map and nums1Map[n] > 0:
        res.append(n)
        nums1Map[n] -= 1
        
    return res


nums1 = [1, 2, 2, 1]
nums2 = [2, 2]
solution = Solution()
print('intersect: ', solution.intersect(nums1, nums2))
