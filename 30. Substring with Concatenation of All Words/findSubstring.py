from typing import List

class Solution:
  def findSubstring(self, s: str, words: List[str]) -> List[int]:
    if not s or not words:
      return []
    
    wordLen = len(words[0])
    totalLen = len(words) * wordLen

    wordCount = {}

    for word in words:
      if word not in wordCount:
        wordCount[word] = 0
      wordCount[word] += 1

    res = []

    for i in range(len(s) - totalLen + 1):
      wordCountInWindow = {}
      j = i

      while j < i + totalLen:
        word = s[j:j + wordLen]

        if word not in wordCount:
          break

        if word not in wordCountInWindow:
          wordCountInWindow[word] = 0

        wordCountInWindow[word] += 1

        if wordCountInWindow[word] > wordCount[word]:
          break

        j += wordLen

      if j == i + totalLen:
        res.append(i)

    return res
  

solution = Solution()
s = "barfoothefoobarman"
words = ["foo", "bar"]
print('findSubstring: ', solution.findSubstring(s, words))
