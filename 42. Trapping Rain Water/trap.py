from typing import List

class Solution:
  def trap(self, height: List[int]) -> int:
    n = len(height)
    leftMax = [0] * n
    rightMax = [0] * n

    leftMax[0] = 0
    for i in range(1, n):
      leftMax[i] = max(leftMax[i - 1], height[i - 1])

    rightMax[n - 1] = 0
    for i in range(n - 2, - 1, -1):
      rightMax[i] = max(rightMax[i + 1], height[i + 1])

    waterTrapped = 0
    for i in range(n):
      waterAboveBar = min(leftMax[i], rightMax[i]) - height[i]
      waterTrapped += max(waterAboveBar, 0)

    return waterTrapped

solution = Solution()
height = [0,1,0,2,1,0,1,3,2,1,2,1]
print('trap: ', solution.trap(height))
