from collections import deque
from typing import List, Optional
# Definition for a binary tree node.
class TreeNode:
  def __init__(self, val=0, left=None, right=None):
    self.val = val
    self.left = left
    self.right = right

class Solution:
  def verticalOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
    if not root:
      return []

    q = deque([(root, 0)])
    cols = {}
    res = []
    maxColumn = 0
    minColumn = 0
    
    while q:
      node, column = q.popleft()
      maxColumn = max(maxColumn, column)
      minColumn = min(minColumn, column)

      if column not in cols:
        cols[column] = []
      cols[column].append(node.val)
      
      if node.left:
        q.append((node.left, column - 1))
        
      if node.right:
        q.append((node.right, column + 1))
        
    for i in range(minColumn, maxColumn + 1):
      res.append(cols[i])

    return res
    
    
root = TreeNode(3)
root.left = TreeNode(9)
root.right = TreeNode(20)

root.right.left = TreeNode(15)
root.right.right = TreeNode(7)

solution = Solution()
print(solution.verticalOrder(root))
