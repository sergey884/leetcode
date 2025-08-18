# [402. Remove K Digits](https://leetcode.com/problems/remove-k-digits/description/)

Given string num representing a non-negative integer `num`, and an integer `k`, return the smallest possible integer after removing `k` digits from `num`.


### Example 1:
> Input: num = "1432219", k = 3
>
> Output: "1219"
>
> Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.


### Example 2:
> Input: num = "10200", k = 1
>
> Output: "200"
>
> Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.


### Example 3:
> Input: num = "10", k = 2
>
> Output: "0"
>
> Explanation: Remove all the digits from the number and it is left with nothing which is 0.


### Constraints:
- `1 <= k <= num.length <=` $10^5$
- `num` consists of only digits.
- `num` does not have any leading zeros except for the zero itself.


## Solutions

### Javascript
```javascript
const removeKdigits = (num, k) => {
  if (num.length === k) {
    return '0';
  }

  const stack = [];
  const res = [];

  for (let i = 0; i < num.length; i++) {
    while (k > 0 && stack.length && stack[stack.length - 1] > num[i]) {
      k--;
      stack.pop();
    }
    stack.push(num[i]);
  }

  for (let i = 0; i < k; i++) {
    stack.pop();
  }

  for (let i = 0; i < stack.length; i++) {
    if (stack[i] === '0' && !res.length) {
      continue;
    }
    res.push(stack[i]);
  }

  return res.length ? res.join('') : '0';
};
```

### Python
```python
class Solution:
  def removeKdigits(self, num: str, k: int) -> str:
    if len(num) == k:
      return '0'
  
    stack = []
    res = []

    for c in num:
      while k > 0 and stack and stack[-1] > c:
        k -= 1
        stack.pop()
      stack.append(c)
    
    for _ in range(k):
      stack.pop()

    for c in stack:
      if c == '0' and not res:
        continue
      res.append(c)

    return ''.join(res) if res else "0"
```