# [214. Shortest Palindrome](https://leetcode.com/problems/shortest-palindrome/description)

You are given a string `s`. You can convert `s` to a palindrome (A palindrome is a string that reads the same forward and backward.) by adding characters in front of it.

Return the shortest palindrome you can find by performing this transformation.

 

### Example 1:
> Input: s = "aacecaaa"
>
> Output: "aaacecaaa"


### Example 2:
> Input: s = "abcd"
>
> Output: "dcbabcd"
 

### Constraints:
- $0 <= s.length <= 5 * 10^{4}$
- `s` consists of lowercase English letters only.


## Solutions

### Performance

- **Time Complexity**: $O(n^{2})$
- **Space Complexity**: $O(n)$

### Javascript
```javascript
const shortestPalindrome = (s) => {
  const l = s.length;
  const reversedString = s.split('').reverse().join('');

  for (let i = 0; i < l; i++) {
    if (s.substring(0, l - i) === reversedString.substring(i)) {
      return reversedString.substring(0, i) + s;
    }
  }

  return '';
};
```

### Performance

- **Time Complexity**: $O(n^{2})$
- **Space Complexity**: $O(n)$

### Python
```python
class Solution:
  def shortestPalindrome(self, s: str) -> str:
    l = len(s)
    left = 0
    for right in range(l - 1, -1, -1):
      if s[left] == s[right]:
        left += 1

    if left == l:
      return s
    
    nonPolindromeSuffix = s[left:]
    reversedSuffix = nonPolindromeSuffix[::-1]

    return reversedSuffix + self.shortestPalindrome(s[:left]) + nonPolindromeSuffix
```