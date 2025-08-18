from typing import Optional

# Definition for a binary tree node.
class TreeNode:
  def __init__(self, val=0, left=None, right=None):
    self.val = val
    self.left = left
    self.right = right

class Solution:
  def flatten(self, root: Optional[TreeNode]) -> None:
    """
    Do not return anything, modify root in-place instead.
    """
    if not root:
      return
    
    self.flatten(root.left)
    self.flatten(root.right)
    
    left = root.left
    right = root.right
    
    root.left = None
    root.right = left
    
    rightmost = root
    while rightmost.right:
      rightmost = rightmost.right
    rightmost.right = right
        

root = TreeNode(1)
root.left = TreeNode(2)
root.right = TreeNode(5)

root.left.left = TreeNode(3)
root.left.right = TreeNode(4)

root.right.right = TreeNode(6)
#  [1,2,3,4,5,6]
solution = Solution()
print('flatten: ', solution.flatten(root))
