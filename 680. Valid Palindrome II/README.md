# [680. Valid Palindrome II](https://leetcode.com/problems/valid-palindrome-ii/description/)

Given a string `s`, return true if the `s` can be palindrome after deleting **at most one** character from it.

 
### Example 1:
> Input: s = "aba"
>
> Output: true


### Example 2:
> Input: s = "abca"
>
> Output: true
>
> Explanation: You could delete the character 'c'.


### Example 3:
> Input: s = "abc"
>
> Output: false
 

### Constraints:
- $1 <= s.length <= 10^{5}$
- `s` consists of lowercase English letters.


## Solutions

### Performance

- **Time Complexity**: $O(n)$
- **Space Complexity**: $O(1)$

### Javascript
```javascript
const checkPalindrome = (s, left, right) => {
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};

const validPalindrome = (s) => {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] != s[right]) {
      return checkPalindrome(s, left + 1, right) || checkPalindrome(s, left, right - 1);
    }
    left++;
    right--;
  }

  return true;
};
```

### Performance

- **Time Complexity**: $O(n)$
- **Space Complexity**: $O(1)$

### Python
```python
class Solution:
  def checkPolindrome(self, s: str, left: int, right: int) -> bool:
    while left < right:
      if s[left] != s[right]:
        return False
      left += 1
      right -= 1
    
    return True
    
  def validPalindrome(self, s: str) -> bool:
    left, right = 0, len(s) - 1
    while left < right:
      if s[left] != s[right]:
        return self.checkPolindrome(s, left + 1, right) or self.checkPolindrome(s, left, right - 1)
      left += 1
      right -= 1
      
    return True
```