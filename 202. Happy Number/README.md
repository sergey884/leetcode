# [202. Happy Number](https://leetcode.com/problems/happy-number/description/)

Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

- Starting with any positive integer, replace the number by the sum of the squares of its digits.
- Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
- Those numbers for which this process ends in 1 are happy.

Return `true` if n is a happy number, and `false` if not.

 
### Example 1:
> Input: n = 19
>
> Output: true
>
> Explanation:
>
> $1^2 + 9^2 = 82$
>
> $8^2 + 2^2 = 68$
>
> $6^2 + 8^2 = 100$
>
> $1^2 + 0^2 + 0^2 = 1$


### Example 2:
> Input: n = 2
>
> Output: false
 

### Constraints:
- $1 <= n <= 2^{31} - 1$


## Solutions

### Performance

- **Time Complexity**: `O(n * log n)`
- **Space Complexity**: `O(n)`

### Javascript (Swaping algorithm)
```javascript
const sumOfSquare = (n) => {
  let res = 0;

  while (n) {
    const digit = n % 10;
    res += digit ** 2;
    n = Math.floor(n / 10);
  }

  return res;
}

const isHappy = (n) => {
  const seen = new Set();

  while (!seen.has(n)) {
    seen.add(n);
    n = sumOfSquare(n);

    if (n === 1) {
      return true;
    }
  }

  return false;
};
```

### Performance

- **Time Complexity**: `O(n * log n)`
- **Space Complexity**: `O(n)`

### Python
```python
class Solution:
  def sumOfSquare(self, n: int) -> int:
    res = 0
    while n:
      digit = n % 10
      res += digit ** 2
      n = n // 10
    
    return res

  def isHappy(self, n: int) -> bool:
    seen = set()

    while n not in seen:
      seen.add(n)
      n = self.sumOfSquare(n)

      if n == 1:
        return True
    
    return False
```