# [1137. N-th Tribonacci Number](https://leetcode.com/problems/n-th-tribonacci-number/description)

The Tribonacci sequence $T_n$ is defined as follows: 

$T_0$ = 0, $T_1$ = 1, $T_2$ = 1, and $T_{n+3}$ = $T_n$ + $T_{n+1}$ + $T_{n+2}$ for n >= 0.

Given `n`, return the value of $T_n$.


### Example 1:
> Input: n = 4
>
> Output: 4
>
> Explanation:
>
> $T_3$ = 0 + 1 + 1 = 2
>
> $T_4$ = 1 + 1 + 2 = 4


### Example 2:
> Input: n = 25
>
> Output: 1389537
 

### Constraints:
- `0 <= n <= 37`
- The answer is guaranteed to fit within a 32-bit integer, ie. answer <= $2^{31}$ - 1.


## Solutions

### Javascript
```javascript
const tribonacci = (n) => {
  if (n === 0) {
    return 0;
  }

  if (n === 1 || n === 2) {
    return 1;
  }

  const res = Array(n + 4).fill(0);
  res[1] = 1;
  res[2] = 1;

  for (let i = 0; i < n - 2; i++) {
    res[i + 3] = res[i] + res[i + 1] + res[i + 2];
  }

  return res[n];
};
```

### Python
```python
class Solution:
  def tribonacci(self, n: int) -> int:
    if n == 0:
      return 0
    
    if n == 1 or  n == 2:
      return 1
  
    res = [0] * (n + 4)
    res[1] = 1
    res[2] = 1
  
    for i in range(0, n - 2):
      res[i + 3] = res[i] + res[i + 1] + res[i + 2]

    return res[n]
```