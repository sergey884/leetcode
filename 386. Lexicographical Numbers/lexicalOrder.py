from typing import List

class Solution:
  def lexicalOrder(self, n: int) -> List[int]:
    lecsicographicalOrder = []
    current = 1

    for i in range(n):
      lecsicographicalOrder.append(current)

      if current * 10 <= n:
        current *= 10
      else:
        if current >= n:
          current //= 10
        current += 1
        print('current: ', current)
        while current % 10 == 0:
          current //= 10

    return lecsicographicalOrder
  

n = 131
solution = Solution()
print('lexicalOrder: ', solution.lexicalOrder(n)) # [1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9]
