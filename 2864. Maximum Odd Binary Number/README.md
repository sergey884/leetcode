# [2864. Maximum Odd Binary Number](https://leetcode.com/problems/maximum-odd-binary-number/description)

You are given a **binary** string `s` that contains at least one `'1'`.

You have to **rearrange** the bits in such a way that the resulting binary number is the **maximum odd binary number** that can be created from this combination.

Return a string representing the maximum odd binary number that can be created from the given combination.

**Note** that the resulting string can have leading zeros.


### Example 1:
> Input: s = `"010"`
>
> Output: `"001"`
>
> Explanation: `Because there is just one '1', it must be in the last position. So the answer is "001".`


### Example 2:
> Input: s = "0101"
>
> Output: "1001"
>
> Explanation: `One of the '1's must be in the last position. The maximum number that can be made with the remaining digits is "100". So the answer is "1001".`


### Constraints:
- `1 <= s.length <= 100`
- `s` consists only of `'0'` and `'1'`.
- `s` contains at least one `'1'`.


## Solutions

### Javascript
```javascript
const maximumOddBinaryNumber = (s) => {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '1') {
      count++;
    }
  }

  const res = '1'.repeat(count - 1) + '0'.repeat(s.length - count) + '1';

  return res;
};
```

### Javascript (Partitioning)
```javascript
const maximumOddBinaryNumber = (s) => {
  let left = 0;
  let str = s.split('');

  for (let i = 0; i < str.length; i++) {
    if (s[i] === '1') {
      [str[i], str[left]] = [str[left], str[i]]
      left++;
    }
  }

  [str[left - 1], str[str.length - 1]] = [str[str.length - 1], str[left - 1]]

  return str.join('');
};
```

### Python
```python
class Solution:
  def maximumOddBinaryNumber(self, s: str) -> str:
    count = 0

    for char in s:
      if char == '1':
        count += 1

    res = (count - 1) * '1' + (len(s) - count) * '0' + '1'
    return res
```

### Python (Partitioning)
```python
class Solution:
  def maximumOddBinaryNumber(self, s: str) -> str:
    res = [char for char in s]
    left = 0

    for i in range(len(s)):
      if res[i] == '1':
        res[left], res[i] = res[i], res[left]
        left += 1

    res[left - 1], res[len(s) - 1] = res[len(s) - 1], res[left - 1]

    return ''.join(res)
```