class Solution:
  def integerBreak(self, n: int) -> int:
    if n == 2:
      return 1
    
    if n == 3:
      return 2
    
    res = 1
    while n > 4:
      n -= 3
      res *= 3

    res *= n

    return res


solution = Solution()
n = 58
print('integerBreak: ', solution.integerBreak(n))
