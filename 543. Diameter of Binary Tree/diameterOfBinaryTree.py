from typing import Optional
# Definition for a binary tree node.
class TreeNode:
  def __init__(self, val=0, left=None, right=None):
    self.val = val
    self.left = left
    self.right = right

class Solution:
  def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
    def dfs(node):
      if not node:
        return 0
      
      leftDepth = dfs(node.left)
      rightDepth = dfs(node.right)

      self.maxDiameter = max(self.maxDiameter, leftDepth + rightDepth)

      return max(leftDepth, rightDepth) + 1
    
    self.maxDiameter = 0
    dfs(root)

    return self.maxDiameter

root = TreeNode(1)
root.left = TreeNode(2)
root.right = TreeNode(3)
root.left.left = TreeNode(4)
root.left.right = TreeNode(5)

solution = Solution()
print('diameterOfBinaryTree: ', solution.diameterOfBinaryTree(root))