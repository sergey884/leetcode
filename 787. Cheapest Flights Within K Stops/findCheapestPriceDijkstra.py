import heapq
from collections import defaultdict

class Solution:
  def findCheapestPrice(self, n: int, flights: list[list[int]], src: int, dst: int, k: int) -> int:
    graph = defaultdict(dict)
    for flight in flights:
      source, destination, price = flight
      graph[source][destination] = price

    priorityQueue = [(0, src, 0)] # cost, node, stops

    while priorityQueue:
      cost, node, stops = heapq.heappop(priorityQueue)

      if node == dst:
        return cost
      
      if stops > k:
        continue

      print('G: ', graph[node].items())
      for neighbor, price in graph[node].items():
        heapq.heappush(priorityQueue, (cost + price, neighbor, stops + 1))

    return -1

  
n = 4
flights = [[0,1,100], [1,2,100], [2,0,100], [1,3,600], [2,3,200]]
src = 0
dst = 3
k = 1

solution = Solution()
print('findCheapestPrice: ', solution.findCheapestPrice(n, flights, src, dst, k))