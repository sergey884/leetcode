# [921. Minimum Add to Make Parentheses Valid](https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/description)

A parentheses string is valid if and only if:
- It is the empty string,
- It can be written as `AB` (`A` concatenated with `B`), where `A` and `B` are valid strings, or
- It can be written as `(A)`, where `A` is a valid string.

You are given a parentheses string `s`. In one move, you can insert a parenthesis at any position of the string.

- For example, if `s = "()))"`, you can insert an opening parenthesis to be `"(()))"` or a closing parenthesis to be `"())))"`.

Return the minimum number of moves required to make `s` valid.

 
### Example 1:
> Input: s = "())"
>
> Output: 1


### Example 2:
> Input: s = "((("
>
> Output: 3
 

### Constraints:
- `1 <= s.length <= 1000`
- `s[i]` is either `'('` or `')'`.


## Solutions

### Performance

- **Time Complexity**: $O(n)$
- **Space Complexity**: $O(1)$

### Javascript
```javascript
const minAddToMakeValid = (s) => {
  const stack = [];
  let unmutchedOpenCount = 0;
  let unmutchedClosedCount = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      unmutchedClosedCount++;
    } else {
      if (unmutchedClosedCount === 0) {
        unmutchedOpenCount++;
      } else {
        unmutchedClosedCount--;
      }
    }
  }

  return unmutchedClosedCount + unmutchedOpenCount;
};
```

### Performance

- **Time Complexity**: $O(n)$
- **Space Complexity**: $O(n)$

### Javascript
```javascript
const minAddToMakeValid = (s) => {
  const stack = [];
  let missedOpenParenhesis = 0;
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case "(":
        stack.push(s[i]);
        break;
      case ")":
        if (!stack.length) {
          missedOpenParenhesis++;
        } else {
          stack.pop();
        }
        break;
      default:
        break;
    }
  }

  return stack.length + missedOpenParenhesis;
};
```

### Performance

- **Time Complexity**: $O(n)$
- **Space Complexity**: $O(1)$

### Python
```python
```