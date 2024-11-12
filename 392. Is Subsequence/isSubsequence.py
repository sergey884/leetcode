class Solution:
  def isSubsequence(self, s: str, t: str) -> bool:
    if not s:
      return True
    
    i = 0
    for j in range(len(t)):
      if t[j] == s[i]:
        i += 1
        if i == len(s):
          return True

    return False
  

s = "b"
t = "abc"
solution = Solution()
print("isSubsequence: ",  solution.isSubsequence(s, t))
