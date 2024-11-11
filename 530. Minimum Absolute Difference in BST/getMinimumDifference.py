from typing import Optional

# Definition for a binary tree node.
class TreeNode:
  def __init__(self, val=0, left=None, right=None):
    self.val = val
    self.left = left
    self.right = right

class Solution:
  def getMinimumDifference(self, root: Optional[TreeNode]) -> int:
    prev = None
    minDiff = float('inf')

    def inorderTraversal(node):
      nonlocal minDiff, prev
      if not node:
        return
      
      inorderTraversal(node.left)

      if prev is not None:
        diff = abs(node.val - prev.val)
        minDiff = min(minDiff, diff)

      prev = node
      
      inorderTraversal(node.right)


    inorderTraversal(root)
    return minDiff
  

root = TreeNode(4)
root.left = TreeNode(2)
root.right = TreeNode(6)

root.left.left = TreeNode(1)
root.left.right = TreeNode(3)
      
solution = Solution()
print('getMinimumDifference: ', solution.getMinimumDifference(root))
