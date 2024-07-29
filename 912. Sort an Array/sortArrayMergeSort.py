from typing import List

class Solution:
  def merge(self, leftArr, rightArr, res):
    leftArrLen = len(leftArr)
    rightArrLen = len(rightArr)
    i, j, k = 0, 0, 0
    
    while i < leftArrLen and j < rightArrLen:
      if leftArr[i] < rightArr[j]:
        res[k] = leftArr[i]
        i += 1
      else:
        res[k] = rightArr[j]
        j += 1
      k += 1
      
    while i < leftArrLen:
      res[k] = leftArr[i]
      i += 1
      k += 1
      
    while j < rightArrLen:
      res[k] = rightArr[j]
      j += 1
      k += 1
      
  def mergeSort(self, nums):
    l = len(nums)
    
    if l < 2:
      return

    leftArr = []
    rightArr = []
    
    m = l // 2

    leftArr = nums[:m]
    rightArr = nums[m:]

    self.mergeSort(leftArr)
    self.mergeSort(rightArr)
    
    self.merge(leftArr, rightArr, nums)
    
  def sortArray(self, nums: List[int]) -> List[int]:
    self.mergeSort(nums)
    return nums


nums = [5, 2, 3, 1]
solution = Solution()
print('sortArray: ', solution.sortArray(nums))
