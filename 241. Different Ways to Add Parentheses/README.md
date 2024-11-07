# [241. Different Ways to Add Parentheses](https://leetcode.com/problems/different-ways-to-add-parentheses/description)

Given a string `expression` of numbers and operators, return all possible results from computing all the different possible ways to group numbers and operators. You may return the answer in **any order**.

The test cases are generated such that the output values fit in a 32-bit integer and the number of different results does not exceed 104.

 
### Example 1:
> Input: expression = "2-1-1"
>
> Output: [0,2]
>
> Explanation:
>
> ((2-1)-1) = 0
>
> (2-(1-1)) = 2


### Example 2:
> Input: expression = "2*3-4*5"
>
> Output: [-34,-14,-10,-10,10]
>
> Explanation:
>
> (2*(3-(4*5))) = -34
>
> ((2*3)-(4*5)) = -14
>
> ((2*(3-4))*5) = -10
>
> (2*((3-4)*5)) = -10
>
> (((2*3)-4)*5) = 10
 

### Constraints:
- $1 <= expression.length <= 20$
- `expression` consists of digits and the operator `'+'`, `'-'`, and `'*'`.
- All the integer values in the input expression are in the range `[0, 99]`.


## Solutions

### Performance

- **Time Complexity**: $O(2^{n})$
- **Space Complexity**: $O(2^{n})$

### Javascript
```javascript
const diffWaysToCompute = (expression) => {
  const res = []
  const l = expression.length;

  if (l === 0) {
    return res;
  } 

  if (l === 1) {
    return [parseInt(expression)];
  }

  if (l === 2 && !isNaN(expression[0])) {
    return [parseInt(expression)];
  }

  for (let i = 0; i < l; i++) {
    const c = expression[i];
    if (!isNaN(c)) {
      continue;
    }

    const leftResult = diffWaysToCompute(expression.slice(0, i));
    const rightResult = diffWaysToCompute(expression.slice(i + 1));

    for (let left of leftResult) {
      for (let right of rightResult) {
        switch (c) {
          case '+':
            res.push(left + right);
            break;
          case '-':
            res.push(left - right);
            break;
          case '*':
            res.push(left * right);
            break;
        }
      }
    }
  }

  return res;
};
```

### Performance

- **Time Complexity**: $O(2^{n})$
- **Space Complexity**: $O(2^{n})$

### Python
```python
class Solution:
  def diffWaysToCompute(self, expression: str) -> List[int]:
    res = []
    l = len(expression)
    if l == 0:
      return res
    
    if l == 1:
      return [int(expression)]
    
    if l == 2 and expression[0].isdigit():
      return [int(expression)]
    
    for i in range(l):
      if expression[i].isdigit():
        continue

      leftResult = self.diffWaysToCompute(expression[:i])
      rightResult = self.diffWaysToCompute(expression[i + 1:])

      for leftVal in leftResult:
        for rightVal in rightResult:
          if expression[i] == '+':
            res.append(leftVal + rightVal)
          elif expression[i] == '-':
            res.append(leftVal - rightVal)
          elif expression[i] == '*':
            res.append(leftVal * rightVal)
    
    return res
```