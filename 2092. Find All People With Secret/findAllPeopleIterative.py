from typing import List
from collections import deque

class Solution:
  def findAllPeople(self, n: int, meetings: List[List[int]], firstPerson: int) -> list[int]:
    secretHolders = [False] * n
    secretHolders[firstPerson] = True

    graph = [[] for _ in range(n)]
    for meeting in meetings:
      src, dst, time = meeting
      graph[src].append((dst, time))
      graph[dst].append((src, time))

    queue = deque([(firstPerson, 0)])
    while queue:
      person, time = queue.popleft()
      print('person, time: ', person, time, graph[person])
      for neighbor, meetingTime in graph[person]:
        if meetingTime == time and not secretHolders[neighbor]:
          secretHolders[neighbor] = True
          queue.append((neighbor, time))

    print('secretHolders: ', secretHolders)
  

n = 6
meetings = [[1,2,5], [2,3,8], [1,5,10]]
firstPerson = 1

solution = Solution()
print('findAllPeople: ', solution.findAllPeople(n, meetings, firstPerson))
