from typing import List

class Solution:
  def trap(self, height: List[int]) -> int:
    if not height:
      return 0

    left, right = 0, len(height) - 1
    leftMax, rightMax = height[left], height[right]
    waterTrapped = 0

    while left < right:
      if leftMax < rightMax:
        left += 1
        leftMax = max(leftMax, height[left])
        waterTrapped += leftMax - height[left]
      else:
        right -= 1
        rightMax = max(rightMax, height[right])
        waterTrapped += rightMax - height[right]

    return waterTrapped

solution = Solution()
height = [0,1,0,2,1,0,1,3,2,1,2,1]
print('trap: ', solution.trap(height))
