class Solution:
  def numSteps(self, s: str) -> int:
    steps = 0
    carry = 0
    
    for i in range(len(s) - 1, 0, -1):
      if int(s[i]) + carry == 1:
        carry = 1
        steps += 2
      else:
        steps += 1
        
    return steps + carry
  
  
s = "1101"
solution = Solution()
print('numSteps: ', solution.numSteps(s))
