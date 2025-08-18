class Solution:
  def customSortString(self, order: str, s: str) -> str:
    count = [0] * 26
    res = ''
    
    for c in s:
      count[ord(c) - ord('a')] += 1
      
    for c in order:
      res += c * count[ord(c) - ord('a')]
      count[ord(c) - ord('a')] = 0
      
    for c in s:
      chIndex = ord(c) - ord('a')
      if count[chIndex] > 0:
        res += c * count[chIndex]
        count[chIndex] = 0

    return res

order = "cba"
s = "abcd"
solution = Solution()
print(solution.customSortString(order, s))
