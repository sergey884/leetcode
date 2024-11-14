# [528. Random Pick with Weight](https://leetcode.com/problems/random-pick-with-weight/description)

You are given a **0-indexed** array of positive integers `w` where `w[i]` describes the **weight** of the $i^{th}$ index.

You need to implement the function `pickIndex()`, which **randomly** picks an index in the range `[0, w.length - 1]` (**inclusive**) and returns it. The **probability** of picking an index `i` is `w[i] / sum(w)`.

- For example, if `w = [1, 3]`, the probability of picking index `0` is `1 / (1 + 3) = 0.25` (i.e., `25%`), and the probability of picking index `1` is `3 / (1 + 3) = 0.75` (i.e., `75%`).

### Example 1:

> Input
>
> ["Solution","pickIndex"]
>
> [[[1]],[]]
>
> Output
>
> [null,0]
>
> Explanation
> Solution solution = new Solution([1]);
> solution.pickIndex(); // return 0. The only option is to return 0 since there is only one element in w.

### Example 2:

> Input
>
> ["Solution","pickIndex","pickIndex","pickIndex","pickIndex","pickIndex"]
>
> [[[1,3]],[],[],[],[],[]]
>
> Output
>
> [null,1,1,1,1,0]
>
> Explanation
>
> Solution solution = new Solution([1, 3]);
>
> solution.pickIndex(); // return 1. It is returning the second element (index = 1) that has a probability of 3/4.
>
> solution.pickIndex(); // return 1
>
> solution.pickIndex(); // return 1
>
> solution.pickIndex(); // return 1
>
> solution.pickIndex(); // return 0. It is returning the first element (index = 0) that has a probability of 1/4.
>
> Since this is a randomization problem, multiple answers are allowed.
>
> All of the following outputs can be considered correct:
>
> [null,1,1,1,1,0]
>
> [null,1,1,1,1,1]
>
> [null,1,1,1,0,0]
>
> [null,1,1,1,0,1]
>
> [null,1,0,1,0,0]
>
> ......
>
> and so on.

### Constraints:

- $1 <= w.length <= 10^{4}$
- $1 <= w[i] <= 10^{5}$
- pickIndex will be called at most $10^{4}$ times.

## Solutions

### Performance

- **Time Complexity**: Constructor: $O(n)$, pickIndex:  $O(log n)$
- **Space Complexity**: Constructor: $O(n)$, pickIndex:  $O(1)$

### Javascript

```javascript
class Solution { 
  constructor(w) {
    this.prefixSum = [];
    let currSum = 0;
    for (let i = 0; i < w.length; i++) {
      currSum += w[i];
      this.prefixSum.push(currSum);
    }

    this.totalSum = currSum;
  };

  pickIndex() {
    const target = this.totalSum * Math.random();
    let left = 0;
    let right = this.prefixSum.length - 1;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (target > this.prefixSum[mid]) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    return left;
  }
}
```

### Performance

- **Time Complexity**: Constructor: $O(n)$, pickIndex:  $O(log n)$
- **Space Complexity**: Constructor: $O(n)$, pickIndex:  $O(1)$

### Python

```python
class Solution:
  def __init__(self, w: List[int]):
    self.prefixSum = []
    currSum = 0
    for weight in w:
      currSum += weight
      self.prefixSum.append(currSum)
    self.totalSum = currSum

  def pickIndex(self) -> int:
    target = self.totalSum * random.random()
    left, right = 0, len(self.prefixSum) - 1
    while left < right:
      mid = left + (right - left) // 2
      if target > self.prefixSum[mid]:
        left = mid + 1
      else:
        right = mid
    
    return left
```
