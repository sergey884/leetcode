from typing import Optional
# Definition for a binary tree node.
class TreeNode:
  def __init__(self, val=0, left=None, right=None):
    self.val = val
    self.left = left
    self.right = right

class Solution:
  def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
    if not p and not q:
      return True
      
    if not p or not q:
      return False
      
    if p.val != q.val:
      return False
      
    return (self.isSameTree(p.left, q.left) and
      self.isSameTree(p.right, q.right))
  
pTree = TreeNode(1)
pTree.left = TreeNode(2)
pTree.right = TreeNode(3)

qTree = TreeNode(1)
qTree.left = TreeNode(2)
qTree.right = TreeNode(3)

solution = Solution()
print('isSameTree: ', solution.isSameTree(pTree, qTree))