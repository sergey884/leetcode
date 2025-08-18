# Definition for a binary tree node.
import math
from typing import Optional

class TreeNode:
  def __init__(self, val=0, left=None, right=None):
    self.val = val
    self.left = left
    self.right = right

class Solution:
  def isValidBST(self, root: Optional[TreeNode]) -> bool:
    def validate(node, low = float('-inf'), high = float('inf'),):
      if not node:
        return True
      
      if node.val <= low or node.val >= high:
        return False
      
      return validate(node.left, low, node.val) and validate(node.right, node.val, high)

    return validate(root)
    

root = TreeNode(5)
root.left = TreeNode(1)
root.right = TreeNode(4)

root.right.left = TreeNode(3)
root.right.right = TreeNode(6)

solution = Solution()
print('isValidBST: ', solution.isValidBST(root))
