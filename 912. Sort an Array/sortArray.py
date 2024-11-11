from typing import List

class Solution:
  def sortArray(self, nums: List[int]) -> List[int]:
    def partition(arr, left, right):
      pivot = arr[right]
      i = left - 1
      
      for j in range(left, right):
        if arr[j] < pivot:
          i += 1
          [arr[i], arr[j]] = [arr[j], arr[i]]
      
      [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]]
      return i + 1
          
    def quickSort(arr, left, right):
      if left < right:
        index = partition(arr, left, right)
        quickSort(arr, left, index - 1)
        quickSort(arr, index + 1, right)
        
    quickSort(nums, 0, len(nums) - 1)
    return nums
        
    
        
nums = [5, 2, 3, 1]
solution = Solution()
print('sortArray: ', solution.sortArray(nums))
