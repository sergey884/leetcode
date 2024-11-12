# [70. Climbing Stairs](https://leetcode.com/problems/climbing-stairs/description/)

You are climbing a staircase. It takes `n` steps to reach the top.

Each time you can either climb `1` or `2` steps. In how many distinct ways can you climb to the top?

### Example 1:

> Input: n = 2
>
> Output: 2
>
> Explanation: There are two ways to climb to the top.
>
> 1. 1 step + 1 step
>
> 2. 2 steps

### Example 2:

> Input: n = 3
>
> Output: 3
>
> Explanation: There are three ways to climb to the top.
>
> 1. 1 step + 1 step + 1 step
>
> 2. 1 step + 2 steps
>
> 3. 2 steps + 1 step

### Constraints:

- `1 <= n <= 45`

## Solutions

### Performance

- **Time Complexity**: `O(n)`
- **Space Complexity**: `O(n)`

### Javascript

```javascript
const climbStairs = (n) => {
  const dp = Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
};
```

### Performance

- **Time Complexity**: `O(n)`
- **Space Complexity**: `O(1)`

### Javascript

```javascript
const climbStairs = (n) => {
  let prevValue1 = 1;
  let prevValue2 = 1;

  for (let i = 2; i <= n; i++) {
    const dp = prevValue1 + prevValue2;
    prevValue2 = prevValue1;
    prevValue1 = dp;
  }

  return prevValue1;
};
```

### Performance

- **Time Complexity**: `O(n)`
- **Space Complexity**: `O(n)`

### Python

```python
class Solution:
  def climbStairs(self, n: int) -> int:
    dp = [1, 1] + [0] * (n - 1)

    for i in range(2, n + 1):
      dp[i] = dp[i - 1] + dp[i - 2]

    return dp[n]
```

### Performance

- **Time Complexity**: `O(n)`
- **Space Complexity**: `O(1)`

### Python

```python
class Solution:
  def climbStairs(self, n: int) -> int:
    prevValue1 = 1
    prevValue2 = 1

    for i in range(2, n + 1):
      dp = prevValue1 + prevValue2
      prevValue2 = prevValue1
      prevValue1 = dp

    return prevValue1
```
