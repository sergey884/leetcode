# [227. Basic Calculator II](https://leetcode.com/problems/basic-calculator-ii/description)

Given a string `s` which represents an expression, evaluate this expression and return its value. 

The integer division should truncate toward zero.

You may assume that the given expression is always valid. All intermediate results will be in the range of $[-2^{31}, 2^{31} - 1]$.

Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as `eval()`.

 
### Example 1:
> Input: s = "3+2*2"
> Output: 7


### Example 2:
> Input: s = " 3/2 "
> Output: 1


### Example 3:
> Input: s = " 3+5 / 2 "
>
> Output: 5
 

### Constraints:
- $1 <= s.length <= 3 * 10^{5}$
- `s` consists of integers and operators `('+', '-', '*', '/')` separated by some number of spaces.
- `s` represents **a valid expression**.
- All the integers in the expression are non-negative integers in the range $[0, 2^{31} - 1]$.
- The answer is guaranteed to fit in a 32-bit integer.


## Solutions

### Performance

- **Time Complexity**: `O(n)`
- **Space Complexity**: `O(n)`

### Javascript
```javascript
const calculate = (s) => {
  const stack = [];
  let num = 0;
  let prevOperator = "+";

  for (let i = 0; i < s.length; i++) {
    if (!isNaN(s[i]) && s[i] !== " ") {
      num = num * 10 + parseInt(s[i]);
    }

    if ((isNaN(s[i]) && s[i] !== " ") || i === s.length - 1) {
      switch (prevOperator) {
        case "+":
          stack.push(num);
          break;
        case "-":
          stack.push(-num);
          break;
        case "*":
          stack.push(stack.pop() * num);
          break;
        case "/":
          stack.push(Math.trunc(stack.pop() / num));
          break;
        default:
          break;
      }
      num = 0;
      prevOperator = s[i];
    }
  }

  return stack.reduce((acc, cur) => acc + cur, 0);
};
```

### Performance

- **Time Complexity**: `O(n)`
- **Space Complexity**: `O(n)`

### Python
```python
class Solution:
  def calculate(self, s: str) -> int:
    stack = []
    num = 0
    prevOperator = '+'

    for i in range(len(s)):
      if s[i].isdigit():
        num = num * 10 + int(s[i])

      if (not s[i].isdigit() and s[i] != ' ') or i == len(s) - 1:
        if prevOperator == '+':
          stack.append(num)
        elif prevOperator == '-':
          stack.append(-num)
        elif prevOperator == '*':
          stack.append(stack.pop() * num)
        elif prevOperator == '/':
          stack.append(int(stack.pop() / num))

        prevOperator = s[i]
        num = 0

    return sum(stack)
```