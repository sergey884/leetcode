from typing import List

class Solution:
  def minExtraChar(self, s: str, dictionary: List[str]) -> int:
    l = len(s)
    dictionarySet = set(dictionary)
    dp = [0] * (l + 1)
    
    for start in range(l - 1, -1, -1):
      dp[start] = dp[start + 1] + 1
      for end in range(start + 1, l + 1):
        current = s[start:end]
        if current in dictionarySet:
          dp[start] = min(dp[start], dp[end])
          
    return dp[0]


s = "eleetscode"
dictionary = ["leet","code","leetcode"]
solution = Solution()
print('minExtraChar: ', solution.minExtraChar(s, dictionary)) # 0
