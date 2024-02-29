from collections import deque
from typing import Optional
# Definition for a binary tree node.
class TreeNode:
  def __init__(self, val=0, left=None, right=None):
    self.val = val
    self.left = left
    self.right = right

class Solution:
  def findBottomLeftValue(self, root: Optional[TreeNode]) -> int:
    queue = deque([root])

    while queue:
      node = queue.popleft()

      if node.right:
        queue.append(node.right)

      if node.left:
        queue.append(node.left)

    return node.val

root = TreeNode(1)
root.left = TreeNode(2)
root.right = TreeNode(3)

root.left.left = TreeNode(4)

root.right.left = TreeNode(5)
root.right.right = TreeNode(6)

root.right.left.left = TreeNode(7)

solution = Solution()
print('findBottomLeftValue: ', solution.findBottomLeftValue(root))