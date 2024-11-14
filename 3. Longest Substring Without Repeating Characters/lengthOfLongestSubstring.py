class Solution:
  def lengthOfLongestSubstring(self, s: str) -> int:
    previousChars = set()
    count = 0
    maxCount = 0
    left, right = 0, 0

    while right < len(s):
      if s[right] not in previousChars:
        previousChars.add(s[right])
        right += 1
        count += 1
        maxCount = max(maxCount, count)
      else:
        previousChars.remove(s[left])
        count -= 1
        left += 1

    return maxCount

s = "abcabcbb"
solution = Solution()
print('lengthOfLongestSubstring: ', solution.lengthOfLongestSubstring(s))
