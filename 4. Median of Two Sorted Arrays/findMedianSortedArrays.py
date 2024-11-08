from typing import List

class Solution:
  def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
    lenNums1, lenNums2 = len(nums1), len(nums2)

    if lenNums1 > lenNums2:
      return self.findMedianSortedArrays(nums2, nums1)
    
    totalLen = lenNums1 + lenNums2
    halfLen = totalLen // 2

    left, right = 0, lenNums1 - 1
    while True:
      mid = (left + right) // 2
      nums2Mid = halfLen - mid - 2

      nums1Left = nums1[mid] if mid >= 0 else float('-inf')
      nums1Right = nums1[mid + 1] if mid + 1 < lenNums1 else float('inf')

      nums2Left = nums2[nums2Mid] if nums2Mid >= 0 else float('-inf')
      nums2Right = nums2[nums2Mid + 1] if nums2Mid + 1 < lenNums2 else float('inf')

      if nums1Left <= nums2Right and nums2Left <= nums1Right:
        if totalLen % 2:
          return min(nums1Right, nums2Right)
        else:
          return (max(nums1Left, nums2Left) + min(nums1Right, nums2Right)) / 2
      elif nums1Left > nums2Right:
        right = mid - 1
      else:
        left = mid + 1


nums1 = [1, 3]
nums2 = [2]
solution = Solution()
print('findMedianSortedArrays: ', solution.findMedianSortedArrays(nums1, nums2)) # 2
