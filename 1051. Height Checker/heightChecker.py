from typing import List

class Solution:
  def heightChecker(self, heights: List[int]) -> int:
    sorted_heights = sorted(heights)
    count = 0
    for i in range(len(heights)):
      if heights[i] != sorted_heights[i]:
        count += 1

    return count


heights = [1,1,4,2,1,3]
solution = Solution()
print('heightChecker: ', solution.heightChecker(heights))
