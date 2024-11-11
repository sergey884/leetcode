from typing import List

class Solution:
  def countConsistentStrings(self, allowed: str, words: List[str]) -> int:
    count = 0
    allowedChars = set(allowed)
    
    for word in words:
      isConsistent = True
      for c in word:
        if c not in allowedChars:
          isConsistent = False
          break
      if isConsistent:
        count += 1
    
    return count
  

allowed = "ab"
words = ["ad", "bd", "aaab", "baa", "badab"]
solution = Solution()
print("countConsistentStrings: ", solution.countConsistentStrings(allowed, words)) # 2
