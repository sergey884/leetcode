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
      return

    q = deque([(root, 0)])
    cols = {}
    res = []
    
    while q:
      node, index = q.popleft()
      
      if index not in cols:
        cols[index] = []
      cols[index].append(node.val)
      
      if node.left:
        q.append((node.left, index - 1))
        
      if node.right:
        q.append((node.right, index + 1))
        
    for key in sorted(cols.keys()):
      res.append(cols[key])

    return res
    
    
root = TreeNode(3)
root.left = TreeNode(9)
root.right = TreeNode(20)

root.right.left = TreeNode(15)
root.right.right = TreeNode(7)

solution = Solution()
print(solution.verticalOrder(root))
