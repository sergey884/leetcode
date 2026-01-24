from typing import List

class Solution:
  def maxProfitAssignment(self, difficulty: List[int], profit: List[int], worker: List[int]) -> int:
    map_to_difficulty = {}

    for i in range(len(difficulty)):
      d = difficulty[i]
      if d not in map_to_difficulty:
        map_to_difficulty[d] = i

    difficulty.sort()
    worker.sort(reverse = 1)

    i = 0
    max_profit = 0
    res = 0

    for w in worker:
      while i < len(difficulty) and w >= difficulty[i]:
        index = map_to_difficulty[difficulty[i]]
        max_profit = max(max_profit, profit[index])
        i += 1
      res += max_profit

    return res


difficulty = [2,4,6,8,10]
profit = [10,20,30,40,50]
worker = [4,5,6,7]
solution = Solution()
print('maxProfitAssignment: ', solution.maxProfitAssignment(difficulty, profit, worker))
