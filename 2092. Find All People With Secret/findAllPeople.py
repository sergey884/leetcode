from typing import List
from collections import defaultdict

class Solution:
  def findAllPeople(self, n: int, meetings: List[List[int]], firstPerson: int) -> list[int]:
    secrets = set([0, firstPerson])

    timeMap = {}

    for src, dst, time in meetings:
      if time not in timeMap:
        timeMap[time] = defaultdict(list)
      timeMap[time][src].append(dst)
      timeMap[time][dst].append(src)

    def dfs(src, adj):
      if src in visit:
        return
      
      visit.add(src)
      secrets.add(src)
      for nei in adj[src]:
        dfs(nei, adj)


    for t in sorted(timeMap.keys()):
      visit = set()
      for src in timeMap[t]:
        if src in secrets:
          dfs(src, timeMap[t])

    return list(secrets)
  

n = 6
meetings = [[1,2,5],[2,3,8],[1,5,10]]
firstPerson = 1

solution = Solution()
print('findAllPeople: ', solution.findAllPeople(n, meetings, firstPerson))
