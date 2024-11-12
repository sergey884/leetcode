# [253. Meeting Rooms II](https://leetcode.com/problems/meeting-rooms-ii/description/)

Given an array of meeting time intervals intervals where $intervals[i] = [start_i, end_i]$, return the minimum number of conference rooms required.

 
### Example 1:
> Input: intervals = [[0,30],[5,10],[15,20]]
>
> Output: 2


### Example 2:
> Input: intervals = [[7,10],[2,4]]
>
> Output: 1
 

### Constraints:
- $1 <= intervals.length <= 10^{4}$
- $0 <= start_{i} < end_{i} <= 10^{6}$


## Solutions

### Performance

- **Time Complexity**: $O(n log n)$
- **Space Complexity**: $O(n)$

### Javascript
```javascript
const minMeetingRooms = (intervals) => {
  if (!intervals.length) {
    return 0;
  }

  const starts = [];
  const ends = [];

  for (let i = 0; i < intervals.length; i++) {
    starts.push(intervals[i][0]);
    ends.push(intervals[i][1]);
  }

  starts.sort((a, b) => a - b);
  ends.sort((a, b) => a - b);

  let res = 0;
  let count = 0;
  let start = 0;
  let end = 0;

  while (start < intervals.length) {
    if (starts[start] < ends[end]) {
      count++;
      start++;
    } else {
      count--;
      end++;
    }
    res = Math.max(res, count);
  }

  return res;
};
```

### Performance

- **Time Complexity**: $O(n log n)$
- **Space Complexity**: $O(n)$

### Python
```python
class Solution:
  def minMeetingRooms(self, intervals: List[List[int]]) -> int:
    if not intervals:
      return 0

    start = sorted([interval[0] for interval in intervals])
    end = sorted([interval[1] for interval in intervals]) 
    
    res, count = 0, 0
    s, e = 0, 0
    
    while s < len(intervals):
      if start[s] < end[e]:
        count += 1
        s += 1
      else:
        count -= 1
        e += 1
      res = max(res, count)
      
    return res
```