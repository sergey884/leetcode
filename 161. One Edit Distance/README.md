# [161. One Edit Distance](https://leetcode.com/problems/one-edit-distance/description/)

Given two strings `s` and `t`, return `true` if they are both one edit distance apart, otherwise return `false`.

A string s is said to be one distance apart from a string t if you can:
- Insert **exactly one** character into `s` to get `t`.
- Delete **exactly one** character from `s` to get `t`.
- Replace **exactly one** character of `s` with **a different character** to get `t`.
 

### Example 1:
> Input: s = "ab", t = "acb"
>
> Output: true
>
> Explanation: We can insert 'c' into s to get t.


### Example 2:
> Input: s = "", t = ""
>
> Output: false
>
> Explanation: We cannot get t from s by only one step.
 

### Constraints:
- $0 <= s.length, t.length <= 10^{4}$
- `s` and `t` consist of lowercase letters, uppercase letters, and digits.

## Solutions

### Performance

- **Time Complexity**: $O(n)$
- **Space Complexity**: $O(1)$

### Javascript
```javascript
const isOneEditDistance = (s, t) => {
  const sLen = s.length;
  const tLen = t.length;

  if (sLen > tLen) {
    return isOneEditDistance(t, s);
  }

  if (tLen - sLen > 1) {
    return false;
  }

  for (let i = 0; i < sLen; i++) {
    if (s[i] !== t[i]) {
      if (sLen === tLen) {
        return s.slice(i + 1) === t.slice(i + 1);
      } else {
        return s.slice(i) === t.slice(i + 1);
      }
    }
  }

  return sLen + 1 === tLen;
};
```

### Performance

- **Time Complexity**: $O(n)$
- **Space Complexity**: $O(1)$

### Python
```python
class Solution:
  def isOneEditDistance(self, s: str, t: str) -> bool:
    slen, tlen = len(s), len(t)
    
    if slen > tlen:
      return self.isOneEditDistance(t, s)
    
    if tlen - slen > 1:
      return False
    
    for i in range(slen):
      if s[i] != t[i]:
        if slen == tlen:
          return s[i + 1:] == t[i + 1:]
        else:
          return s[i:] == t[i + 1:]
    
    return slen + 1 == tlen
```