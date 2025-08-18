class Solution:
  def climbStairs(self, n: int) -> int:
    prevValue1 = 1
    prevValue2 = 1

    for i in range(2, n + 1):
      dp = prevValue1 + prevValue2
      prevValue2 = prevValue1
      prevValue1 = dp

    return prevValue1
  

n = 3
solution = Solution()
print("climbStairs: ", solution.climbStairs(n))
