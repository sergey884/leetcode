from typing import Optional

# Definition for a binary tree node.
class TreeNode:
  def __init__(self, val=0, left=None, right=None):
    self.val = val
    self.left = left
    self.right = right

class Solution:
  def countNodes(self, root: Optional[TreeNode]) -> int:
    if not root:
      return 0
    
    left = root
    right = root
    leftDepth = 0
    rightDepth = 0
    
    while left:
      leftDepth += 1
      left = left.left
      
    while right:
      rightDepth += 1
      right = right.right
      
    if leftDepth == rightDepth:
      return pow(2, leftDepth) - 1
    
    return 1 + self.countNodes(root.left) + self.countNodes(root.right)


root = TreeNode(1)
root.left = TreeNode(2)
root.right = TreeNode(3)

root.left.left = TreeNode(4)
root.left.right = TreeNode(5)

root.right.left = TreeNode(6)

solution = Solution()
print('countNodes: ', solution.countNodes(root))
