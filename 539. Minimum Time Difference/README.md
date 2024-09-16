# [539. Minimum Time Difference](https://leetcode.com/problems/minimum-time-difference/description)

Given a list of 24-hour clock time points in **"HH:MM"** format, return the minimum **minutes** difference between any two time-points in the list.
 

### Example 1:
> Input: timePoints = ["23:59","00:00"]
>
> Output: 1


### Example 2:
> Input: timePoints = ["00:00","23:59","00:00"]
>
> Output: 0
 

### Constraints:
- $2 <= timePoints.length <= 2 * 10^{4}$
- `timePoints[i]` is in the format **"HH:MM"**.


## Solutions

### Performance

- **Time Complexity**: $O(n * log n)$
- **Space Complexity**: $O(n)$

### Javascript
```javascript
const findMinDifference = (timePoints) => {
  const minutes = timePoints.map(item => {
    const [hours, minutes] = item.split(':');
    return parseInt(hours) * 60 + parseInt(minutes);
  });

  minutes.sort((a, b) => a - b);
  let minDiff = 24 * 60;

  for (let i = 1; i < minutes.length; i++) {
    minDiff = Math.min(minDiff, minutes[i] - minutes[i - 1]);
  }

  const firstLastDiff = minutes[0] + 24 * 60 - minutes[minutes.length - 1];
  minDiff = Math.min(minDiff, firstLastDiff);

  return minDiff;
};
```

### Performance

- **Time Complexity**: $O(n * log n)$
- **Space Complexity**: $O(n)$

### Python
```python
class Solution:
  def transformToMinutes(self, timePoints: List[str]) -> List[int]:
    minutes = []
    for time in timePoints:
      hour, minute = time.split(':')
      minutes.append(int(hour) * 60 + int(minute))

    return minutes

  def findMinDifference(self, timePoints: List[str]) -> int:
    minutes = self.transformToMinutes(timePoints)
    minutes.sort()
    minDifference = 24 * 60

    for mins in range(1, len(minutes)):
      minDifference = min(minDifference, minutes[mins] - minutes[mins - 1])

    firstLastDifference = minutes[0] + 24 * 60 - minutes[-1]
    minDifference = min(minDifference, firstLastDifference)

    return minDifference
```