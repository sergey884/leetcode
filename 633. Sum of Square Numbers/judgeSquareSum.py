from math import sqrt

class Solution:
  def judgeSquareSum(self, c: int) -> bool:
    left = 0
    right = int(sqrt(c))

    while left <= right:
      sum = left * left + right * right
      if sum == c:
        return True
      elif sum < c:
        left += 1
      else:
        right -= 1

    return False


c = 5
solution = Solution()
print('judgeSquareSum: ', solution.judgeSquareSum(c))
