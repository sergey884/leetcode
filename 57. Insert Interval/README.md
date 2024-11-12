# [57. Insert Interval](https://leetcode.com/problems/insert-interval/description/)

You are given an array of non-overlapping intervals `intervals` where intervals[i] = [$start_i$, $end_i$] represent the start and the end of the `ith` interval and `intervals` is sorted in ascending order by $start_i$. You are also given an interval `newInterval = [start, end]` that represents the start and end of another interval.

Insert `newInterval` into `intervals` such that intervals is still sorted in ascending order by $start_i$ and `intervals` still does not have any overlapping intervals (merge overlapping intervals if necessary).

Return `intervals` after the insertion.

Note that you don't need to modify `intervals` in-place. You can make a new array and return it.

 
### Example 1:
> Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
>
> Output: [[1,5],[6,9]]


### Example 2:
> Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
>
> Output: [[1,2],[3,10],[12,16]]
>
> Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].


### Constraints:
- `0 <= intervals.length <=` $10^4$
- `intervals[i].length == 2`
- `0 <= `$start_i$` <= `$end_i$` <=` $10^5$
- `intervals` is sorted by $start_i$ in ascending order.
- `newInterval.length == 2`
- `0 <= start <= end <=` $10^5$


## Solutions

### Javascript
```javascript
const insert = (intervals, newInterval) => {
  let res = [];

  for (let i = 0; i < intervals.length; i++) {
    if (newInterval[1] < intervals[i][0]) {
      res.push(newInterval);
      res = [...res, ...intervals.slice(i)];
      return res
    } else if (newInterval[0] > intervals[i][1]) {
      res.push(intervals[i]);
    } else {
      newInterval = [Math.min(newInterval[0], intervals[i][0]), Math.max(newInterval[1], intervals[i][1])];
    }
  }

  res.push(newInterval);

  return res;
};
```

### Python
```python
class Solution:
  def insert(self, intervals: list[list[int]], newInterval: list[int]) -> list[list[int]]:
    res = []

    for i in range(len(intervals)):
      if newInterval[1] < intervals[i][0]:
        res.append(newInterval)
        return res + intervals[i:]
      elif newInterval[0] > intervals[i][1]:
        res.append(intervals[i])
      else:
        newInterval = [min(newInterval[0], intervals[i][0]), max(newInterval[1], intervals[i][1])]

    res.append(newInterval)

    return res
```