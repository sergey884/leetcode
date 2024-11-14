from typing import List

class Solution:
  def canAttendMeetings(self, intervals: List[List[int]]) -> bool:
    if not intervals:
      return True

    intervals.sort(key = lambda x: x[0])

    for i in range(1, len(intervals)):
      if intervals[i][0] < intervals[i - 1][1]:
        return False
      
    return True


intervals = [[7, 10], [2, 4]]
solution = Solution()
print('canAttendMeetings: ', solution.canAttendMeetings(intervals))
