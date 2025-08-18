class Solution:
  def maxDepth(self, s: str) -> int:
    res = 0
    cur = 0
    
    for char in s:
      if char == '(':
        cur += 1
      elif char == ')':
        cur -= 1
      res = max(res, cur)  
      
    return res
    

s = "(1+(2*3)+((8)/4))+1"
solution = Solution()
print('maxDepth: ', solution.maxDepth(s))
