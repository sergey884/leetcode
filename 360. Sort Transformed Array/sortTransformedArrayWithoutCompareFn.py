from typing import List

class Solution:
  def calc(self, x: int, a: int, b: int, c: int) -> int:
    return a * x ** 2 + b * x + c

  def sortTransformedArray(self, nums: List[int], a: int, b: int, c: int) -> List[int]:
    l = len(nums)
    res = [0] * l
    left, right = 0, l - 1
    index = 0 if a <= 0 else l - 1

    while left <= right:
      left_val = self.calc(nums[left], a, b, c)
      right_val = self.calc(nums[right], a, b, c)

      if a < 0:
        if left_val <= right_val:
          res[index] = left_val
          left += 1
        else:
          res[index] = right_val
          right -= 1
      else:
        if left_val >= right_val:
          res[index] = left_val
          left += 1
        else:
          res[index] = right_val
          right -= 1

      index += (1 if a <= 0 else -1)

    return res
    

nums = [-4,-2,2,4]
a = 1
b = 3
c = 5

solution = Solution()
print('sortTransformedArray: ', solution.sortTransformedArray(nums, a, b, c))
