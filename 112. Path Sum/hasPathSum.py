from typing import Optional
# Definition for a binary tree node.
class TreeNode:
  def __init__(self, val=0, left=None, right=None):
    self.val = val
    self.left = left
    self.right = right

class Solution:
  def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:
    def dfs(node, currentSum):
      if not node:
        return False
      
      currentSum += node.val
      if not node.left and not node.right:
        return currentSum == targetSum
      
      return dfs(node.left, currentSum) or dfs(node.right, currentSum)
    
    return dfs(root, 0)
  

root = TreeNode(5)
root.left = TreeNode(4)
root.right = TreeNode(8)

root.left.left = TreeNode(11)

root.left.left.left = TreeNode(7)
root.left.left.right = TreeNode(2)

root.right.left = TreeNode(13)
root.right.right = TreeNode(4)

root.right.right.right = TreeNode(1)

solution = Solution()
print('hasPathSum: ', solution.hasPathSum(root, 22))

