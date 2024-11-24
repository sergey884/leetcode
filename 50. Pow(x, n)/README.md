# [50. Pow(x, n)](https://leetcode.com/problems/powx-n/description)

Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

 
### Example 1:
> Input: x = 2.00000, n = 10
>
> Output: 1024.00000


### Example 2:
> Input: x = 2.10000, n = 3
>
> Output: 9.26100


### Example 3:
> Input: x = 2.00000, n = -2
>
> Output: 0.25000
>
> Explanation: 2-2 = 1/22 = 1/4 = 0.25
 

### Constraints:
- `-100.0 < x < 100.0`
- $-2^{31} <= n <= 2^{31}-1$
- `n` is an integer.
- Either `x` is not zero or `n > 0`.
- $-10^{4} <= x^{n} <= 10^{4}$


## Solutions

### Performance

- **Time Complexity**: $O(log n)$
- **Space Complexity**: $O(1)$

### Javascript
```javascript
const myPow = (x, n) => {
  if (n === 0) {
    return 1;
  }

  const binaryExponent = (x, n) => {
    let res = 1;
    let absExponent = Math.abs(n);
    while (absExponent !== 0) {
      if (absExponent % 2 === 1) {
        res *= x;
        absExponent--;
      }
      x *= x
      absExponent = Math.floor(absExponent / 2);
    }

    return res;
  };

  const ans = binaryExponent(x, n);
  return n < 0 ? 1 / ans : ans;
};
```

### Performance

- **Time Complexity**: $O(log n)$
- **Space Complexity**: $O(log n)$

### Javascript (Recursion)
```javascript
const myPow = (x, n) => {
  const binaryExponent = (x, n) => {
    if (n === 0) {
      return 1;
    }

    if (n % 2 === 1) {
      return x * binaryExponent(x * x, Math.floor(n / 2));
    } else {
      return binaryExponent(x * x, Math.floor(n / 2))
    }
  };

  const absExponent = Math.abs(n);
  const res = binaryExponent(x, absExponent);

  return n < 0 ? 1 / res : res;
};
```

### Performance

- **Time Complexity**: $O(n)$
- **Space Complexity**: $O(1)$

### Python
```python

```