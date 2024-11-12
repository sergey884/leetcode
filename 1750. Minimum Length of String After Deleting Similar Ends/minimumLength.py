class Solution:
  def minimumLength(self, s: str) -> int:
    start = 0
    end = len(s) - 1

    while start < end and s[start] == s[end]:
      while start + 1 < end and s[start] == s[start + 1]:
        start += 1
      while start < end - 1 and s[end] == s[end - 1]:
        end -= 1

      start += 1
      end -= 1

    return end - start + 1
  
solution = Solution()
s = "cabaabac"
# s = "ca"
# s = "aabccabba"
print('minimumLength: ', solution.minimumLength(s))
