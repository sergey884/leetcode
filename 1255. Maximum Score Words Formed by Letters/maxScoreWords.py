from collections import Counter
from typing import List

class Solution:
  def maxScoreWords(self, words: List[str], letters: List[str], score: List[int]) -> int:
    def can_form_word(word, letter_cnt):
      word_cnt = Counter(word)
      for c in word_cnt:
        if word_cnt[c] > letter_cnt[c]:
          return False
      return True
    
    def get_score(word):
      res = 0
      for c in word:
        res += score[ord(c) - ord('a')]
      return res
      
    letter_cnt = Counter(letters)
    
    def backtracking(i):
      if i == len(words):
        return 0
      # skip the word
      res = backtracking(i + 1)
      
      if can_form_word(words[i], letter_cnt):
        for c in words[i]:
          letter_cnt[c] -= 1
        res = max(res, get_score(words[i]) + backtracking(i + 1))
        for c in words[i]:
          letter_cnt[c] += 1
      return res
    
    return backtracking(0)
  

words = ["dog","cat","dad","good"]
letters = ["a","a","c","d","d","d","g","o","o"]
score = [1,0,9,5,0,0,3,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0]

solution = Solution()
print('maxScoreWords: ', solution.maxScoreWords(words, letters, score))
