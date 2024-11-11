# [205. Isomorphic Strings](https://leetcode.com/problems/isomorphic-strings/description/)

Given two strings `s` and `t`, determine if they are isomorphic.

Two strings `s` and `t` are isomorphic if the characters in `s` can be replaced to get `t`.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 
### Example 1:
> Input: s = "egg", t = "add"
>
> Output: true


### Example 2:
> Input: s = "foo", t = "bar"
>
> Output: false


### Example 3:
> Input: s = "paper", t = "title"
>
> Output: true
 

### Constraints:
- `1 <= s.length <= 5 *` $10^4$
- `t.length == s.length`
- `s` and `t` consist of any valid ascii character.



## Solutions

### Javascript
```javascript
const isIsomorphic = (s, t) => {
  const mapST = {};
  const mapTS = {};

  for (let i = 0; i < s.length; i++) {
    let charS = s[i];
    let charT = t[i];

    if ((mapST[charS] !== undefined && mapST[charS] !== charT) || 
        (mapTS[charT] !== undefined && mapTS[charT] !== charS)) {
      return false;
    }

    mapST[charS] = charT;
    mapTS[charT] = charS;
  }

  return true;
};
```

### Python
```python
class Solution:
  def isIsomorphic(self, s: str, t: str) -> bool:
    mapST, mapTS = {}, {}
    
    for i in range(len(s)):
      charS, charT = s[i], t[i]
      
      if ((charS in mapST and mapST[charS] != charT) or
          (charT in mapTS and mapTS[charT] != charS)):
        return False
      
      mapST[charS] = charT
      mapTS[charT] = charS
    
    return True
```