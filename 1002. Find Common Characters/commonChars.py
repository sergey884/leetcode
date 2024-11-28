from collections import Counter
from typing import List

class Solution:
  def commonChars(self, words: List[str]) -> List[str]:
    char_cnt = Counter(words[0])
    
    for i in range(1, len(words)):
      current_word_cnt = Counter(words[i])
      for c in char_cnt:
        char_cnt[c] = min(char_cnt[c], current_word_cnt[c])
        
    res = []
    for c in char_cnt:
      for i in range(char_cnt[c]):
        res.append(c)
        
    return res
      

words = ["bella","label","roller"]
solution = Solution()
print('commonChars: ', solution.commonChars(words))
