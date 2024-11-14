# [633. Sum of Square Numbers](https://leetcode.com/problems/sum-of-square-numbers/description/)

Given a non-negative integer `c`, decide whether there're two integers `a` and `b` such that $a^{2} + b^{2} = c$.

 
### Example 1:
> Input: c = 5
> Output: true
> Explanation: 1 * 1 + 2 * 2 = 5


### Example 2:
> Input: c = 3
>
> Output: false
 

### Constraints:
- $0 <= c <= 2^{31} - 1$


## Solutions

### Performance

- **Time Complexity**: `O(sqrt(c))`
- **Space Complexity**: `O(1)`

### Javascript
```javascript
const judgeSquareSum = (c) => {
  let left = 0;
  let right = Math.round(Math.sqrt(c));

  while (left < right) {
    const sum = left * left + right * right;
    if (sum === c) {
      return true;
    } else if (sum < c) {
      left++;
    } else {
      right--;
    }
  }

  return false;
};
```

### Performance

- **Time Complexity**: `O(sqr(c))`
- **Space Complexity**: `O(1)`

### Python
```python
class Solution:
  def judgeSquareSum(self, c: int) -> bool:
    left = 0
    right = int(sqrt(c))

    while left <= right:
      sum = left * left + right * right
      if sum == c:
        return True
      elif sum < c:
        left += 1
      else:
        right -= 1

    return False
```