from typing import List

class Solution:
  def uncommonFromSentences(self, s1: str, s2: str) -> List[str]:
    words = s1.split() + s2.split()
    wordCount = {}
    uncommonWords = []

    for word in words:
      if word not in wordCount:
        wordCount[word] = 1
      else:
        wordCount[word] += 1

    for word in wordCount:
      if wordCount[word] == 1:
        uncommonWords.append(word)

    return uncommonWords
  

s1 = "this apple is sweet"
s2 = "this  apple is sour"
solution = Solution()
print("uncommonFromSentences: ", solution.uncommonFromSentences(s1, s2)) # ["sweet", "sour"]
