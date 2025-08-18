class Solution:
  def shortestPalindrome(self, s: str) -> str:
    l = len(s)
    left = 0
    for right in range(l - 1, -1, -1):
      if s[left] == s[right]:
        left += 1

    if left == l:
      return s
    
    nonPolindromeSuffix = s[left:]
    reversedSuffix = nonPolindromeSuffix[::-1]

    return reversedSuffix + self.shortestPalindrome(s[:left]) + nonPolindromeSuffix
  

s = "aacecaaa"
solution = Solution()
print('shortestPalindrome: ', solution.shortestPalindrome(s)) # "aaacecaaa"
