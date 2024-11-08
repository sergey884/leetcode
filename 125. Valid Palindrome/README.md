# [125. Valid Palindrome](https://leetcode.com/problems/valid-palindrome/description)

A phrase is a **palindrome** if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string `s`, return `true` if it is a **palindrome**, or `false` otherwise.

 
### Example 1:
> Input: s = "A man, a plan, a canal: Panama"
>
> Output: true
>
> Explanation: "amanaplanacanalpanama" is a palindrome.


### Example 2:
> Input: s = "race a car"
>
> Output: false
>
> Explanation: "raceacar" is not a palindrome.


### Example 3:
> Input: s = " "
>
> Output: true
>
> Explanation: s is an empty string "" after removing non-alphanumeric characters.
>
> Since an empty string reads the same forward and backward, it is a palindrome.
 

### Constraints:
- $1 <= s.length <= 2 * 10^{5}$
- `s` consists only of printable ASCII characters.


## Solutions

### Performance

- **Time Complexity**: $O(n)$
- **Space Complexity**: $O(1)$

### Javascript

```javascript
const isPalindrome = (s) => {
  let left = 0;
  let right = s.length - 1;
  const isAlphaNumeric = (char) => {
    return /[a-zA-Z0-9]/.test(char);
  };

  while (left < right) {
    if (!isAlphaNumeric(s[left])) {
      left++;
      continue;
    }

    if (!isAlphaNumeric(s[right])) {
      right--;
      continue;
    }

    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
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
  def isPalindrome(self, s: str) -> bool:
    left, right = 0, len(s) - 1
    while left < right:
      if s[left].isalnum() == False:
        left += 1
        continue

      if s[right].isalnum() == False:
        right -= 1
        continue

      if s[left].lower() != s[right].lower():
        return False
      
      left += 1
      right -= 1

    return True
```
