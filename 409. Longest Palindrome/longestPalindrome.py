class Solution:
  def longestPalindrome(self, s: str) -> int:
    charCnt = {}
    res = 0
    
    for c in s:
      if c not in charCnt:
        charCnt[c] = 0
      charCnt[c] += 1
      
      if charCnt[c] % 2 == 0:
        res += 2

    for cnt in charCnt.values():
      if cnt % 2:
        res += 1
        break
    
    return res


s = "abccccdd"
solution = Solution()
print('longestPalindrome: ', solution.longestPalindrome(s))
