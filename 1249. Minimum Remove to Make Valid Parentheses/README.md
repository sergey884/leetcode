# [1249. Minimum Remove to Make Valid Parentheses](https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/description/)

Given a string s of `'('` , `')'` and lowercase English characters.

Your task is to remove the minimum number of parentheses ( `'('` or `')'`, in any positions ) so that the resulting parentheses string is valid and return **any** valid string.

Formally, a parentheses string is valid if and only if:

- It is the empty string, contains only lowercase characters, or
- It can be written as `AB` (`A` concatenated with `B`), where `A` and `B` are valid strings, or
- It can be written as `(A)`, where `A` is a valid string.


### Example 1:
> Input: s = "lee(t(c)o)de)"
>
> Output: "lee(t(c)o)de"
>
> Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.


### Example 2:
> Input: s = "a)b(c)d"
>
> Output: "ab(c)d"


### Example 3:
> Input: s = "))(("
>
> Output: ""
>
> Explanation: An empty string is also valid.
 

### Constraints:
- `1 <= s.length <=` $10^5$
- `s[i]` is either `'('` , `')'`, or lowercase English letter.


## Solutions

### Javascript
```javascript
const minRemoveToMakeValid = (s) => {
  const res = [];
  let cnt = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      res.push(s[i]);
      cnt++;
    }else if (s[i] === ')' && cnt > 0) {
      res.push(s[i]);
      cnt--;
    } else if (s[i] !== ')') {
      res.push(s[i]);
    }
  }

  const filtered = [];
  for (let j = res.length - 1; j >= 0; j--) {
    if (res[j] === '(' && cnt > 0) {
      cnt--;
    } else {
      filtered.push(res[j]);
    }
  }

  return filtered.reverse().join('');
};
```

### Python
```python
class Solution:
  def minRemoveToMakeValid(self, s: str) -> str:
    res = []
    cnt = 0
    
    for c in s:
      if c == '(':
        res.append(c)
        cnt += 1
      elif c == ')' and cnt > 0:
        res.append(c)
        cnt -= 1
      elif c != ')':
        res.append(c)
        
    filtered = []
    for c in res[::-1]:
      if c == '(' and cnt > 0:
        cnt -= 1
      else:
        filtered.append(c)
        
    return ''.join(filtered[::-1])
```