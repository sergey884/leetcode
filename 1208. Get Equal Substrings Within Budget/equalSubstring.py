class Solution:
  def equalSubstring(self, s: str, t: str, maxCost: int) -> int:
    currentCost = 0
    left = 0
    res = 0

    for right in range(len(s)):
      currentCost += abs(ord(s[right]) - ord(t[right]))

      while currentCost > maxCost:
        currentCost -= abs(ord(s[left]) - ord(t[left]))
        left += 1

      res = max(res, right - left + 1)

    return res
  

s = "abcd"
t = "bcdf"
maxCost = 3

solution = Solution()
print('equalSubstring: ', solution.equalSubstring(s, t, maxCost))
