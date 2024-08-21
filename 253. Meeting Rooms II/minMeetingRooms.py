from typing import List

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


intervals = [[0, 30], [5, 10], [15, 20]]
solution = Solution()
print("minMeetingRooms: ", solution.minMeetingRooms(intervals)) # 2
