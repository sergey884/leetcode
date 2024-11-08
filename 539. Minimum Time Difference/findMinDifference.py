from typing import List

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


timePoints = ["23:59","00:00"]
solution = Solution()
print("findMinDifference: ", solution.findMinDifference(timePoints)) # 1
