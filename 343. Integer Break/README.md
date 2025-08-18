# [343. Integer Break](https://leetcode.com/problems/integer-break/description)

Given an integer `n`, break it into the sum of `k` positive integers, where `k >= 2`, and maximize the product of those integers.

Return the maximum product you can get.


### Example 1:
> Input: `n = 2`
> Output: `1`
> Explanation: `2 = 1 + 1, 1 × 1 = 1.`


### Example 2:
> Input: `n = 10`
> Output: `36`
> Explanation: `10 = 3 + 3 + 4, 3 × 3 × 4 = 36.`
 

### Constraints:
- `2 <= n <= 58`


## Solutions


### Performance

- **Time Complexity**: $O(n)$
- **Space Complexity**: $O(1)$

### Javascript
```javascript
const integerBreak = (n) => {
  if (n === 2) {
    return 1;
  }

  if (n === 3) {
    return 2;
  }

  let res = 1;
  while (n > 4) {
    n -= 3;
    res *= 3;
  }

  res *= n

  return res;
};
```

### Performance

- **Time Complexity**: $O(n^{2})$
- **Space Complexity**: $O(n)$

### Javascript (Bottom-Up Dynamic Programming)
```javascript
const integerBreak = (n) => {
  if (n === 2) {
    return 1;
  }

  if (n === 3) {
    return 2;
  }

  const dp = Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 3;

  for (let i = 4; i <= n; i++) {
    let ans = i;
    for (let j = 1; j < i; j++) {
      ans = Math.max(ans, j * dp[i - j]);
    }
    dp[i] = ans;
  }

  return dp[n];
};
```

### Performance

- **Time Complexity**: $O(n)$
- **Space Complexity**: $O(1)$

### Python
```python
class Solution:
  def integerBreak(self, n: int) -> int:
    if n == 2:
      return 1
    
    if n == 3:
      return 2
    
    res = 1
    while n > 4:
      n -= 3
      res *= 3

    res *= n

    return res
```

### Performance

- **Time Complexity**: $O(n^{2})$
- **Space Complexity**: $O(n)$

### Python (DFS)
```python
class Solution:
  def integerBreak(self, n: int) -> int:
    dp = { 1: 1 }
    def dfs(num):
      if num in dp:
        return dp[num]
      
      dp[num] = 0 if num == n else num
      for i in range(1, num):
        val = dfs(i) * dfs(num - i)
        dp[num] = max(dp[num], val)

      return dp[num]
    
    return dfs(n)
```