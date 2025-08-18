class Solution:
  def canConstruct(self, ransomNote: str, magazine: str) -> bool:
    magazine_char_cnt = {}
    for c in magazine:
      if c not in magazine_char_cnt:
        magazine_char_cnt[c] = 0
      magazine_char_cnt[c] += 1
      
    for i in range(len(ransomNote)):
      if (ransomNote[i] not in magazine_char_cnt) or magazine_char_cnt[ransomNote[i]] == 0:
        return False
      magazine_char_cnt[ransomNote[i]] -= 1
      
    return True


ransomNote = "a"
magazine = "b"
solution = Solution()
print('canConstruct: ', solution.canConstruct(ransomNote, magazine))
