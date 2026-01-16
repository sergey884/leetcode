from typing import List

class Solution:
  def replaceWords(self, dictionary: List[str], sentence: str) -> str:
    sictonarySet = set(dictionary)

    def replace(word):
      for i in range(len(word)):
        print('word[:i]: ', word[:i])

    words = sentence.split()
    replace(words[0])
    replacedWords = [replace(word) for word in words]

    return replacedWords
  

dictionary = ["cat","bat","rat"]
sentence = "the cattle was rattled by the battery"
solution = Solution()
print('replaceWords: ', solution.replaceWords(dictionary, sentence))
