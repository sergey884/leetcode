# [252. Meeting Rooms](https://leetcode.com/problems/meeting-rooms/description/)

Given an array of meeting time intervals consisting of start and end times `[[s1,e1],[s2,e2],...]` (`si < ei`), determine if a person could attend all meetings.


### Example 1:
> Input: `[[0,30],[5,10],[15,20]]`
>
> Output: `false`


### Example 2:
> Input: `[[7,10],[2,4]]`
>
> Output: `true`


NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.


## Solutions

### Javascript
```javascript
const canAttendMeetings = (intervals) => {
  if (!intervals || !intervals.length) {
    return true;
  }

  intervals.sort((aInterval, bInterval) => aInterval[0] - bInterval[0]);

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < intervals[i - 1][1]) {
      return false;
    }
  }

  return true;
};
```

### Python
```python
class Solution:
  def canAttendMeetings(self, intervals: List[List[int]]) -> bool:
    if not intervals:
      return True

    intervals.sort(key = lambda x: x[0])

    for i in range(1, len(intervals)):
      if intervals[i][0] < intervals[i - 1][1]:
        return False
      
    return True
```