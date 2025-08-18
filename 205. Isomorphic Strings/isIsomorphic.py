class Solution:
  def isIsomorphic(self, s: str, t: str) -> bool:
    mapST, mapTS = {}, {}
    
    for i in range(len(s)):
      charS, charT = s[i], t[i]
      
      if ((charS in mapST and mapST[charS] != charT) or
          (charT in mapTS and mapTS[charT] != charS)):
        return False
      
      mapST[charS] = charT
      mapTS[charT] = charS
    
    return True


s = "egg"
t = "add"
solution = Solution()
print('isIsomorphic: ', solution.isIsomorphic(s, t))
