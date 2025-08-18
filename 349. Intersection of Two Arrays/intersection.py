from typing import List

class Solution:
  def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:
    res = []
    nums1Set = set(nums1)

    for num in nums2:
      if num in nums1Set:
        res.append(num)
        nums1Set.remove(num)

    return res


nums1 = [1, 2, 2, 1]
nums2 = [2, 2]
solution = Solution()
print('intersection: ', solution.intersection(nums1, nums2))
