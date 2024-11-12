import math

class Solution:
  def pivotInteger(self, n: int) -> int:
    x = (n ** 2 + n) // 2
    y = int(math.sqrt(x))

    return x if x * x == y else -1
  
solution = Solution()
print('pivotInteger: ', solution.pivotInteger(8))
