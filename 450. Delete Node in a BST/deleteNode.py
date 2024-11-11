from typing import Optional
# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
  def successor(self, node: Optional[TreeNode]) -> int:
    node = node.right
    while node.left:
      node = node.left
    return node.val
  
  def predecessor(self, node: Optional[TreeNode]) -> int:
    node = node.left
    while node.right:
      node = node.right
    return node.val

  def deleteNode(self, root: Optional[TreeNode], key: int) -> Optional[TreeNode]:
    if not root:
      return None
    
    if key > root.val:
      root.right = self.deleteNode(root.right, key)
    elif key < root.val:
      root.left = self.deleteNode(root.left, key)
    else:
      if not (root.left or root.right):
        root = None
      elif root.right:
        root.val = self.successor(root)
        root.right = self.deleteNode(root.right, root.val)
      else:
        root.val = self.predecessor(root)
        root.left = self.deleteNode(root.left, root.val)
    
    return root


root = TreeNode(5)
root.left = TreeNode(3)
root.right = TreeNode(6)

root.left.left = TreeNode(2)
root.left.right = TreeNode(4)

root.right.right = TreeNode(7)

solution = Solution()
print("deleteNode: ", solution.deleteNode(root, 3)) # [5, 4, 6, 2, None, None, 7]
