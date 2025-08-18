class Solution:
  def calculate(self, s: str) -> int:
    stack = []
    num = 0
    prevOperator = '+'

    for i in range(len(s)):
      if s[i].isdigit():
        num = num * 10 + int(s[i])

      if (not s[i].isdigit() and s[i] != ' ') or i == len(s) - 1:
        if prevOperator == '+':
          stack.append(num)
        elif prevOperator == '-':
          stack.append(-num)
        elif prevOperator == '*':
          stack.append(stack.pop() * num)
        elif prevOperator == '/':
          stack.append(int(stack.pop() / num))

        prevOperator = s[i]
        num = 0

    return sum(stack)
  

solution = Solution()
# s = "3+2*2"
s = " 3/2 "
print('calculate: ', solution.calculate(s)) # 7
