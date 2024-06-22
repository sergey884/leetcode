# [1002. Find Common Characters](https://leetcode.com/problems/find-common-characters/description/)

Given a string array `words`, return an array of all characters that show up in all strings within the `words` (including duplicates). You may return the answer in any order.

 
### Example 1:
> Input: words = ["bella","label","roller"]
>
> Output: ["e","l","l"]


### Example 2:
> Input: words = ["cool","lock","cook"]
>
> Output: ["c","o"]
 

### Constraints:
- `1 <= words.length <= 100`
- `1 <= words[i].length <= 100`
- `words[i]` consists of lowercase English letters.


## Solutions

### Performance

- **Time Complexity**: `O(n * m)`
- **Space Complexity**: `O(n * m)`

### Javascript
```javascript
const getCharCount = (str) => {
  const ctarCnt = {};
  for (let i = 0; i < str.length; i++) {
    if (!ctarCnt[str[i]]) {
      ctarCnt[str[i]] = 0;
    }
    ctarCnt[str[i]]++;
  }

  return ctarCnt;
};

const commonChars = (words) => {
    const ctarCnt = getCharCount(words[0]);

    for (let i = 1; i < words.length; i++) {
      const wordCtarCnt = getCharCount(words[i]);
      for (let key in ctarCnt) {
        ctarCnt[key] = Math.min(ctarCnt[key], wordCtarCnt[key] || 0);
      }
    }

    const res = [];
    for (let key in ctarCnt) {
      for (let i = 0; i < ctarCnt[key]; i++) {
        res.push(key);
      }
    }

    return res;
};
```

### Python
```python
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
```