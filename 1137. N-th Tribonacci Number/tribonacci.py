class Solution:
  def tribonacci(self, n: int) -> int:
    if n == 0:
      return 0
    
    if n == 1 or  n == 2:
      return 1
  
    res = [0] * (n + 4)
    res[1] = 1
    res[2] = 1
  
    for i in range(0, n - 2):
      res[i + 3] = res[i] + res[i + 1] + res[i + 2]

    return res[n]


solution = Solution()
print('tribonacci: ', solution.tribonacci(4))
