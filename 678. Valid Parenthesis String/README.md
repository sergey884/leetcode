# [678. Valid Parenthesis String](https://leetcode.com/problems/valid-parenthesis-string/description/)

Given a string `s` containing only three types of characters: `'('`, `')'` and `'*'`, return `true` if `s` is **valid**.

The following rules define a **valid** string:

- Any left parenthesis `'('` must have a corresponding right parenthesis `')'`.
- Any right parenthesis `')'` must have a corresponding left parenthesis `'('`.
- Left parenthesis `'('` must go before the corresponding right parenthesis `')'`.
- `'*'` could be treated as a single right parenthesis `')'` or a single left parenthesis `'('` or an empty string `""`.


### Example 1:
> Input: s = "()"
>
> Output: true


### Example 2:
> Input: s = "(*)"
>
> Output: true


### Example 3:
> Input: s = "(*))"
>
> Output: true


### Constraints:
- `1 <= s.length <= 100`
- `s[i]` is `'('`, `')'` or `'*'`.


## Solutions

### Javascript
```javascript
const checkValidString = (s) => {
  let leftMin = 0;
  let leftMax = 0;

  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case '(':
        leftMin++;
        leftMax++;
        break;
      case ')':
        leftMin--;
        leftMax--;
        break;
      case '*':
        leftMin--;
        leftMax++;
        break;
    }

    if (leftMax < 0) {
      return false;
    }

    if (leftMin < 0) {
      leftMin = 0;
    }
  }

  return leftMin === 0;
};
```

### Python
```python
class Solution:
  def checkValidString(self, s: str) -> bool:
    leftMin, leftMax = 0, 0
    
    for c in s:
      if c == '(':
        leftMin, leftMax = leftMin + 1, leftMax + 1
      elif c == ')':
        leftMin, leftMax = leftMin - 1, leftMax - 1
      else:
        leftMin, leftMax = leftMin - 1, leftMax + 1
        
      if leftMax < 0:
        return False
      
      if leftMin < 0:
        leftMin = 0
        
    return leftMin == 0
```