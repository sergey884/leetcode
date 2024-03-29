class Solution:
  def findCheapestPrice(self, n: int, flights: list[list[int]], src: int, dst: int, k: int) -> int:
    prices = [float("inf")] * n
    prices[src] = 0

    for i in range(k + 1):
      tempPrices = prices.copy()
      for s, d, p in flights:
        if prices[s] == float("inf"):
          continue

        if prices[s] + p < tempPrices[d]:
          tempPrices[d] = prices[s] + p

      prices = tempPrices

    return -1 if prices[dst] == float("inf") else prices[dst]
  
n = 4
flights = [[0,1,100], [1,2,100], [2,0,100], [1,3,600], [2,3,200]]
src = 0
dst = 3
k = 1

solution = Solution()
print('findCheapestPrice: ', solution.findCheapestPrice(n, flights, src, dst, k))