from typing import List

class Solution:
  def largestRectangleArea(self, heights):
    stack = []
    maxArea = 0
    index = 0
    
    while index < len(heights):
      if not stack or heights[index] >= heights[stack[-1]]:
        stack.append(index)
        index += 1
      else:
        top = stack.pop()
        area = heights[top] * ((index - stack[-1] - 1) if stack else index)
        maxArea = max(maxArea, area)
        
    while stack:
      top = stack.pop()
      area = heights[top] * ((index - stack[-1] - 1) if stack else index)
      maxArea = max(maxArea, area)
      
    return maxArea
    
  def maximalRectangle(self, matrix: List[List[str]]) -> int:
    ROWS, COLS = len(matrix), len(matrix[0])
    hights = [0] * COLS
    maxArea = 0
    
    for row in matrix:
      for col in range(COLS):
        hights[col] = hights[col] + 1 if row[col] == "1" else 0
      maxArea = max(maxArea, self.largestRectangleArea(hights))
      
    return maxArea  
    
    
matrix = [
  ["1", "0", "1", "0", "0"],
  ["1", "0", "1", "1", "1"],
  ["1", "1", "1", "1", "1"],
  ["1", "0", "0", "1", "0"]
]
solution = Solution()
print('maximalRectangle: ', solution.maximalRectangle(matrix))
