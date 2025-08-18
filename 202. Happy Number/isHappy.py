class Solution:
  def sumOfSquare(self, n: int) -> int:
    res = 0
    while n:
      digit = n % 10
      res += digit ** 2
      n = n // 10
    
    return res

  def isHappy(self, n: int) -> bool:
    seen = set()

    while n not in seen:
      seen.add(n)
      n = self.sumOfSquare(n)

      if n == 1:
        return True
    
    return False
  

n = 19
solution = Solution()
print("isHappy: ", solution.isHappy(n))
