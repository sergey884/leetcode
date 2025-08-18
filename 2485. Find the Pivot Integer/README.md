# [2485. Find the Pivot Integer](https://leetcode.com/problems/find-the-pivot-integer/description/)

Given a positive integer `n`, find the **pivot integer** `x` such that:

- The sum of all elements between `1` and `x` inclusively equals the sum of all elements between `x` and `n` inclusively.

Return the pivot integer `x`. If no such integer exists, return `-1`. It is guaranteed that there will be at most one pivot index for the given input.

 
### Example 1:
> Input: n = 8
>
> Output: 6
>
> Explanation: 6 is the pivot integer since: 1 + 2 + 3 + 4 + 5 + 6 = 6 + 7 + 8 = 21.


### Example 2:
> Input: n = 1
>
> Output: 1
>
> Explanation: 1 is the pivot integer since: 1 = 1.


### Example 3:
> Input: n = 4
>
> Output: -1
>
> Explanation: It can be proved that no such integer exist.
 

### Constraints:
- `1 <= n <= 1000`


## Solutions
#### Calculations
```
      1 + 2 + ... + x = x + ... + n
    ((1 + x) * x) / 2 = ((x + n) * (n - x + 1)) / 2
            x + x ^ 2 = x * n - x ^ 2 + x + n ^ 2 - n * x + n
            2 * x ^ 2 = n ^ 2 + n

            x = sqrt((n ^ 2 + n) / 2)
```

### Javascript
```javascript
const pivotInteger = (n) => {
  const x = Math.floor((n * n + n) / 2);
  const y = Math.floor(Math.sqrt(y));

  return y * y === x ? y : -1;
};
```

### Python
```python
class Solution:
  def pivotInteger(self, n: int) -> int:
    x = (n ** 2 + n) // 2
    y = int(math.sqrt(x))

    return x if x * x == y else -1
```