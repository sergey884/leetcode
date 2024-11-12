# [386. Lexicographical Numbers](https://leetcode.com/problems/lexicographical-numbers/description/)

Given an integer `n`, return all the numbers in the range `[1, n]` sorted in lexicographical order.

You must write an algorithm that runs in `O(n)` time and uses `O(1)` extra space. 

 
### Example 1:
> Input: n = 13
>
> Output: [1,10,11,12,13,2,3,4,5,6,7,8,9]


### Example 2:
> Input: n = 2
>
> Output: [1,2]
 

### Constraints:
- $1 <= n <= 5 * 10^{4}$


## Solutions

### Performance

- **Time Complexity**: $O(n)$
- **Space Complexity**: $O(n)$

### Javascript
```javascript
const lexicalOrder = (n) => {
  const lecsicographicalOrder = [];
  let current = 1;

  for (let i = 1; i <= n; i++) {
    lecsicographicalOrder.push(current);
    if (current * 10 <= n) {
      current *= 10;
    } else {
      if (current >= n) {
        current = Math.floor(current / 10);
      }
      current++;
      while (current % 10 === 0) {
        current = Math.floor(current / 10);
      }
    }
  }

  return lecsicographicalOrder;
};
```

### Performance

- **Time Complexity**: $O(n)$
- **Space Complexity**: $O(n)$

### Python
```python
class Solution:
  def lexicalOrder(self, n: int) -> List[int]:
    lecsicographicalOrder = []
    current = 1

    for i in range(n):
      lecsicographicalOrder.append(current)

      if current * 10 <= n:
        current *= 10
      else:
        if current >= n:
          current //= 10
        current += 1

        while current % 10 == 0:
          current //= 10

    return lecsicographicalOrder
```