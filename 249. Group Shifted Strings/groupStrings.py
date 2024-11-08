from typing import List

class Solution:
  def groupStrings(self, strings: List[str]) -> List[List[str]]:
    group = {}
    def shift_letter(letter , shift):
      c = (ord(letter) - shift) % 26 + ord('a')
      return chr(c)
    
    def get_hash(string):
      shift = ord(string[0])
      letters_arr = [shift_letter(letter, shift) for letter in string]
      return ''.join(letters_arr)
    
    for s in strings:
      key = get_hash(s)
      if key not in group:
        group[key] = []
      group[key].append(s)

    return list(group.values())

 
strings = ["abc", "bcd", "acef", "xyz", "az", "ba", "a", "z"]
solution = Solution()
print('groupStrings: ', solution.groupStrings(strings))
