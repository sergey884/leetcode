# [440. K-th Smallest in Lexicographical Order](https://leetcode.com/problems/k-th-smallest-in-lexicographical-order/description)

Given two integers `n` and `k`, return the $k^{th}$ lexicographically smallest integer in the range `[1, n]`.

 
### Example 1:
> Input: n = 13, k = 2
>
> Output: 10
>
> Explanation: The lexicographical order is [1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9], so the second smallest number is 10.


### Example 2:
> Input: n = 1, k = 1
>
> Output: 1
 

### Constraints:
- $1 <= k <= n <= 10^{9}$


## Solutions

### Performance

- **Time Complexity**: $O((log n)^{n})$
- **Space Complexity**: $O(log n)$

### Javascript
```javascript
const findKthNumber = (n, k) => {
  let current = 1;
  k--;

  const calculateSteps = (n, current, next) => {
    let steps = 0;
    while (current <= n) {
      steps += Math.min(n + 1, next) - current;
      current *= 10;
      next *= 10;
    }

    return steps;
  }

  while (k > 0) {
    let steps = calculateSteps(n, current, current + 1);
    if (steps <= k) {
      current++;
      k -= steps;
    } else {
      current *= 10;
      k--;
    }
  }

  return current;
};
```

### Performance

- **Time Complexity**: $O((log n)^{n})$
- **Space Complexity**: $O(log n)$

### Python
```python
class Solution:
  def findKthNumber(self, n: int, k: int) -> int:
    current = 1
    k -= 1

    while k > 0:
      steps = self.countSteps(n, current, current + 1)

      if steps <= k:
        current += 1
        k -= steps
      else:
        current *= 10
        k -= 1

    return current

  def countSteps(self, n ,current, next):
    steps = 0
    while current <= n:
      steps += min(n + 1, next) - current
      current *= 10
      next *= 10
    
    return steps
```