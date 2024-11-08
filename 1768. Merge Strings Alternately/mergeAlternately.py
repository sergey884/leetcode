class Solution:
  def mergeAlternately(self, word1: str, word2: str) -> str:
    merged = ''
    l = max(len(word1), len(word2))
    for i in range(l):
      if i < len(word1):
        merged += word1[i]
      if i < len(word2):
        merged += word2[i]

    return merged


word1 = "abc"
word2 = "pqr"
solution = Solution()
print('mergeAlternately: ', solution.mergeAlternately(word1, word2)) # "apbqcr"
