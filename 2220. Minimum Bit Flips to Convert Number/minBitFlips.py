class Solution:
  def minBitFlips(self, start: int, goal: int) -> int:
    flipCount = 0

    while start > 0 or goal > 0:
      startBit = start & 1
      goalBit = goal & 1

      if startBit != goalBit:
        flipCount += 1

      start >>= 1
      goal >>= 1

    return flipCount


start = 10
goal = 7
solution = Solution()
print("minBitFlips: ", solution.minBitFlips(start, goal))
