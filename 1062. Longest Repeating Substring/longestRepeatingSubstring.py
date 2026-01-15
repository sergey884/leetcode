class Solution:
  def longestRepeatingSubstring(self, s: str) -> int:
    seen = set()
    maxLength = len(s) - 1

    while maxLength > 0:
      seen.clear()
      for start in range(len(s) - maxLength + 1):
        substring = s[start:start + maxLength]
        if substring in seen:
          return maxLength
        else:
          seen.add(substring)
      maxLength -= 1
    
    return 0
  

s = "abbaba"
solution = Solution()
print('longestRepeatingSubstring: ', solution.longestRepeatingSubstring(s))
