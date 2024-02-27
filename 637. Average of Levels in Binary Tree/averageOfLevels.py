
from typing import Optional, List
# Definition for a binary tree node.
class TreeNode:
  def __init__(self, val=0, left=None, right=None):
    self.val = val
    self.left = left
    self.right = right

class Solution:
  def averageOfLevels(self, root: Optional[TreeNode]) -> List[float]:
    stack = [root]
    result = []

    while stack:
      l = len(stack)
      sum = 0
      for i in range(l):
        node = stack.pop(0)
        sum += node.val

        if node.left:
          stack.append(node.left)

        if node.right:
          stack.append(node.right)

      result.append(sum / l)

    return result
  
root = TreeNode(3)
root.left = TreeNode(9)
root.right = TreeNode(20)
root.right.left = TreeNode(15)
root.right.right = TreeNode(7)

solution = Solution()
print('averageOfLevels: ', solution.averageOfLevels(root))