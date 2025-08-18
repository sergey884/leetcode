class Solution:
  def lengthOfLastWord(self, s: str) -> int:
    i, lastWordLength = len(s) - 1, 0
    
    while s[i] == ' ':
      i -= 1
      
    while i >= 0 and s[i] != ' ':
      lastWordLength += 1
      i -= 1
      
    return lastWordLength
  
s = "   fly me   to   the moon  "
solution = Solution()
print('lengthOfLastWord: ', solution.lengthOfLastWord(s))
