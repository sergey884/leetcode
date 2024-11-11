from typing import List

class Solution:
  def minOperations(self, logs: List[str]) -> int:
    minOpCnt = 0

    for op in logs:
      if op == '../':
        minOpCnt -= 1 if minOpCnt > 0 else 0
      elif op != './':
        minOpCnt += 1

    return minOpCnt
  

logs = ["d1/", "d2/", "../", "d21/", "./"]
solution = Solution()
print('minOperations: ', solution.minOperations(logs))
