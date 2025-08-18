from typing import List

class Solution:
  def diffWaysToCompute(self, expression: str) -> List[int]:
    res = []
    l = len(expression)
    if l == 0:
      return res
    
    if l == 1:
      return [int(expression)]
    
    if l == 2 and expression[0].isdigit():
      return [int(expression)]
    
    for i in range(l):
      if expression[i].isdigit():
        continue

      leftResult = self.diffWaysToCompute(expression[:i])
      rightResult = self.diffWaysToCompute(expression[i + 1:])

      for leftVal in leftResult:
        for rightVal in rightResult:
          if expression[i] == '+':
            res.append(leftVal + rightVal)
          elif expression[i] == '-':
            res.append(leftVal - rightVal)
          elif expression[i] == '*':
            res.append(leftVal * rightVal)
    
    return res


expression = "2-1-1"
solution = Solution()
print('diffWaysToCompute: ', solution.diffWaysToCompute(expression)) # [0, 2]
