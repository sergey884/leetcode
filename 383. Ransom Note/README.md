# [383. Ransom Note](https://leetcode.com/problems/ransom-note/description/)

Given two strings `ransomNote` and `magazine`, return `true` if `ransomNote` can be constructed by using the letters from `magazine` and `false` otherwise.

Each letter in `magazine` can only be used once in `ransomNote`.

 
### Example 1:
> Input: ransomNote = "a", magazine = "b"
>
> Output: false


### Example 2:
> Input: ransomNote = "aa", magazine = "ab"
>
> Output: false


### Example 3:
> Input: ransomNote = "aa", magazine = "aab"
>
> Output: true
 

### Constraints:
- `1 <= ransomNote.length, magazine.length <=` $10^5$
- `ransomNote` and `magazine` consist of lowercase English letters.


## Solutions

### Javascript
```javascript
const canConstruct = (ransomNote, magazine) => {
  const magazineCharCnt = {};
  for (let i = 0; i < magazine.length; i++) {
    if (!magazineCharCnt[magazine[i]]) {
      magazineCharCnt[magazine[i]] = 0;
    }
    magazineCharCnt[magazine[i]]++;
  }

  for (let i = 0; i < ransomNote.length; i++) {
    if (!magazineCharCnt[ransomNote[i]] || magazineCharCnt[ransomNote[i]] === 0) {
      return false;
    }
    magazineCharCnt[ransomNote[i]]--;
  }

  return true;
};
```

### Python
```python
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
```