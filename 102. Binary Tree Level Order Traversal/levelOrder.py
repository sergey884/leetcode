from typing import Optional, List
from collections import deque
# Definition for a binary tree node.
class TreeNode:
  def __init__(self, val=0, left=None, right=None):
    self.val = val
    self.left = left
    self.right = right

class Solution:
  def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
    if not root:
      return []
    
    queue = deque([root])
    res = []

    while queue:
      currentLevel = []
      l = len(queue)

      for i in range(l):
        node = queue.popleft()
        currentLevel.append(node.val)

        if node.left:
          queue.append(node.left)

        if node.right:
          queue.append(node.right)
      
      res.append(currentLevel)

    return res
    
root = TreeNode(3)
root.left = TreeNode(9)
root.right = TreeNode(20)

root.right.left = TreeNode(15)
root.right.right = TreeNode(7)

solution = Solution()
print('levelOrder: ', solution.levelOrder(root))
        