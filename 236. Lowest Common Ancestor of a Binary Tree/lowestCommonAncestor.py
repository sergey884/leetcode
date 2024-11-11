# Definition for a binary tree node.
class TreeNode:
  def __init__(self, x):
    self.val = x
    self.left = None
    self.right = None

class Solution:
  def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
    if not root or root == p or root == q:
      return root
    
    left = self.lowestCommonAncestor(root.left, p, q)
    right = self.lowestCommonAncestor(root.right, p, q)

    if left and right:
      return root
    
    return left or right
    
    
root = TreeNode(3)
root.left = TreeNode(5)
root.right = TreeNode(1)

root.left.left = TreeNode(6)
root.left.right = TreeNode(2)

root.left.right.left = TreeNode(7)
root.left.right.right = TreeNode(4)

root.right.left = TreeNode(0)
root.right.right = TreeNode(8)

solution = Solution()
print('lowestCommonAncestor: ', solution.lowestCommonAncestor(root, root.left.left, root.left.right.right))
