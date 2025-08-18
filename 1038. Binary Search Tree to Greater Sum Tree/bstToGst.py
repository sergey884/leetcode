# Definition for a binary tree node.
class TreeNode:
  def __init__(self, val=0, left=None, right=None):
    self.val = val
    self.left = left
    self.right = right

class Solution:
  def bstToGst(self, root: TreeNode) -> TreeNode:
    self.sum = 0
    def in_order_reverse(node):
      if not node:
        return
      
      if node.right:
        in_order_reverse(node.right)

      self.sum += node.val
      node.val = self.sum

      if node.left:
        in_order_reverse(node.left)

    in_order_reverse(root)
    return root


root = TreeNode(4)
root.left = TreeNode(1)
root.right = TreeNode(6)

root.left.left = TreeNode(0)
root.left.right = TreeNode(2)

root.left.right.right = TreeNode(3)

root.right.left = TreeNode(5)
root.right.right = TreeNode(7)

root.right.right.right = TreeNode(8)

solution = Solution()
print('bstToGst: ', solution.bstToGst(root))
