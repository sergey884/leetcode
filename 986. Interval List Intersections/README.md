# [986. Interval List Intersections](https://leetcode.com/problems/interval-list-intersections/description)

You are given two lists of closed intervals, `firstList` and `secondList`, where $firstList[i] = [start_{i}, end_{i}]$ and $secondList[j] = [start_{j}, end_{j}]$. Each list of intervals is pairwise **disjoint** and in **sorted order**.

Return the intersection of these two interval lists.

A **closed interval** `[a, b]` (with `a <= b`) denotes the set of real numbers `x` with `a <= x <= b`.

The intersection of two closed intervals is a set of real numbers that are either empty or represented as a closed interval. For example, the intersection of `[1, 3]` and `[2, 4] is [2, 3]`.


### Example 1:
![](./images/interval1.png)
> Input: firstList = [[0,2],[5,10],[13,23],[24,25]], secondList = [[1,5],[8,12],[15,24],[25,26]]
>
> Output: [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]


### Example 2:
> Input: firstList = [[1,3],[5,9]], secondList = []
>
> Output: []
 

### Constraints:
- `0 <= firstList.length, secondList.length <= 1000`
- `firstList.length + secondList.length >= 1`
- $0 <= start_{i} < endi <= 10^{9}$
- $end_{i} < start_{i+1}$
- $0 <= start_{j} < end_{j} <= 10^{9}$ 
- $end_{j} < start_{j+1}$


## Solutions

### Performance

- **Time Complexity**: $O(N + M)$
- **Space Complexity**: $O(N + M)$

### Javascript
```javascript
const intervalIntersection = (firstList, secondList) => {
  let i = 0;
  let j = 0;
  const res = [];

  while (i < firstList.length && j < secondList.length) {
    const [firstStart, firstEnd] = firstList[i];
    const [secondStart, secondEnd] = secondList[j];

    const low = Math.max(firstStart, secondStart);
    const high =  Math.min(firstEnd, secondEnd);
    if (low <= high) {
      res.push([low, high]);
    }

    if (firstEnd < secondEnd) {
      i++;
    } else {
      j++;
    }
  }

  return res;
};
```

### Performance

- **Time Complexity**: $O(N + M)$
- **Space Complexity**: $O(N + M)$

### Python
```python

```