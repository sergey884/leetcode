class Solution:
  def findKthNumber(self, n: int, k: int) -> int:
    current = 1
    k -= 1

    while k > 0:
      steps = self.countSteps(n, current, current + 1)

      if steps <= k:
        current += 1
        k -= steps
      else:
        current *= 10
        k -= 1

    return current

  def countSteps(self, n ,current, next):
    steps = 0
    while current <= n:
      steps += min(n + 1, next) - current
      current *= 10
      next *= 10
    
    return steps
  

n = 13
k = 2
solution = Solution()
print('findKthNumber: ', solution.findKthNumber(n, k)) # 10
