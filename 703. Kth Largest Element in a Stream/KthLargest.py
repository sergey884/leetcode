from typing import List

class KthLargest:
  def __init__(self, k: int, nums: List[int]):
    self.k = k
    self.nums = sorted(nums)

  def getIndex(self, val: int) -> int:
    left, right = 0, len(self.nums) - 1

    while left <= right:
      mid = (left + right) // 2
      midElement = self.nums[mid]

      if midElement == val:
        return mid
      
      if val < midElement:
        right = mid - 1
      else:
        left = mid + 1
    
    return left

  def add(self, val: int) -> int:
    index = self.getIndex(val)
    self.nums.insert(index, val)

    return  self.nums[-self.k]
        


# Your KthLargest object will be instantiated and called as such:
# obj = KthLargest(k, nums)
# param_1 = obj.add(val)

kthLargest = KthLargest(3, [4, 5, 8, 2])
kthLargest.add(3)   # return 4
kthLargest.add(5)   # return 5
kthLargest.add(10)  # return 5
kthLargest.add(9)   # return 8
kthLargest.add(4)   # return 8