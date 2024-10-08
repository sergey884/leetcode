# [9. Palindrome Number](https://leetcode.com/problems/palindrome-number/description/)

Given an integer `x`, return `true` if `x` is a palindrome (An integer is a palindrome when it reads the same forward and backward.), and `false` otherwise.

 
### Example 1:
> Input: x = 121
>
> Output: true
>
> Explanation: 121 reads as 121 from left to right and from right to left.


### Example 2:
> Input: x = -121
> Output: false
> Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.


### Example 3:
> Input: x = 10
>
> Output: false
>
> Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

### Constraints:
- $-2^{31} <= x <= 2^{31} - 1$
 

**Follow up:** Could you solve it without converting the integer to a string?


## Solutions

### Performance

- **Time Complexity**: $O(log_{10} x)$
- **Space Complexity**: $O(1)$

### Javascript
```javascript
const isPalindrome = (x) => {
  if (x < 0) {
    return false;
  }

  let reversed = 0;
  let original = x;

  while (x > 0) {
    const digit = x % 10;
    reversed = reversed * 10 + digit;
    x = Math.floor(x / 10);
  }

  return reversed === original;
};
```

### Performance

- **Time Complexity**: $O(log_{10} x)$
- **Space Complexity**: $O(1)$

### Python
```python
class Solution:
  def isPalindrome(self, x: int) -> bool:
    if x < 0:
      return False
    
    reversed = 0
    original = x
    while x > 0:
      digit = x % 10
      reversed = reversed * 10 + digit
      x = x // 10

    return original == reversed
```