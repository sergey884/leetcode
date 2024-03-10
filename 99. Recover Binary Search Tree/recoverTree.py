from typing import Optional
# Definition for a binary tree node.
class TreeNode:
  def __init__(self, val = 0, left = None, right = None):
    self.val = val
    self.left = left
    self.right = right

class Solution:
  def recoverTree(self, root: Optional[TreeNode]) -> None:
    """
    Do not return anything, modify root in-place instead.
    """
    def inorder(node):
      if not node:
        return

      inorder(node.left)

      if self.prev and self.prev.val > node.val:
        if not self.first:
          self.first = self.prev
        self.second = node
      self.prev = node

      inorder(node.right)
    
    self.prev = None
    self.first = None
    self.second = None

    inorder(root)

    self.first.val, self.second.val = self.second.val, self.first.val
  
    return root


root = TreeNode(1)
root.left = TreeNode(3)
root.left.right = TreeNode(2)

solution = Solution()
print('recoverTree: ', solution.recoverTree(root).val)
