class Solution:
  def removeKdigits(self, num: str, k: int) -> str:
    if len(num) == k:
      return '0'
  
    stack = []
    res = []

    for c in num:
      while k > 0 and stack and stack[-1] > c:
        k -= 1
        stack.pop()
      stack.append(c)
    
    for _ in range(k):
      stack.pop()

    for c in stack:
      if c == '0' and not res:
        continue
      res.append(c)

    return ''.join(res) if res else "0"


num = "1432219"
k = 3
solution = Solution()
print('removeKdigits: ', solution.removeKdigits(num, k))
