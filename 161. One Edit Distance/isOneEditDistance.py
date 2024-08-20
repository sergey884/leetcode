class Solution:
  def isOneEditDistance(self, s: str, t: str) -> bool:
    slen, tlen = len(s), len(t)
    
    if slen > tlen:
      return self.isOneEditDistance(t, s)
    
    if tlen - slen > 1:
      return False
    
    for i in range(slen):
      if s[i] != t[i]:
        if slen == tlen:
          return s[i + 1:] == t[i + 1:]
        else:
          return s[i:] == t[i + 1:]
    
    return slen + 1 == tlen
    
s = "ab"
t = "acb"
solution = Solution()
print('isOneEditDistance: ', solution.isOneEditDistance(s, t))
