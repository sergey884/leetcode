# [409. Longest Palindrome](https://leetcode.com/problems/longest-palindrome/description/)

Given a string s which consists of lowercase or uppercase letters, return the length of the **longest palindrome** (A palindrome is a string that reads the same forward and backward.) that can be built with those letters.

Letters are **case sensitive**, for example, "Aa" is not considered a palindrome.

 
### Example 1:
> Input: s = "abccccdd"
>
> Output: 7
>
> Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.


### Example 2:
> Input: s = "a"
>
> Output: 1
>
> Explanation: The longest palindrome that can be built is "a", whose length is 1.
 

### Constraints:
- `1 <= s.length <= 2000`
- `s` consists of lowercase **and/or** uppercase English letters only.


## Solutions

### Javascript
```javascript
const longestPalindrome = (s) => {
  const charCnt = {};
  let res = 0;

  for (let i = 0; i < s.length; i++) {
    if (!charCnt[s[i]]) {
      charCnt[s[i]] = 0;
    }
    charCnt[s[i]]++;

    if (charCnt[s[i]] % 2 === 0) {
      res += 2;
    }
  }

  for (let key in charCnt) {
    if (charCnt[key] % 2) {
      res++;
      break;
    }
  }

  return res;
};
```

### Python
```python
class Solution:
  def longestPalindrome(self, s: str) -> int:
    charCnt = {}
    res = 0
    
    for c in s:
      if c not in charCnt:
        charCnt[c] = 0
      charCnt[c] += 1
      
      if charCnt[c] % 2 == 0:
        res += 2

    for cnt in charCnt.values():
      if cnt % 2:
        res += 1
        break
    
    return res
```