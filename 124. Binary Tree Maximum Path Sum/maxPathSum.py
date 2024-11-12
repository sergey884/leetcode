from typing import Optional

# Definition for a binary tree node.
class TreeNode:
  def __init__(self, val=0, left=None, right=None):
    self.val = val
    self.left = left
    self.right = right

class Solution:
  def maxPathSum(self, root: Optional[TreeNode]) -> int:
    res = [root.val]
   
    def dfs(node):
      if not node:
        return 0
      
      leftMax = max(dfs(node.left), 0)
      rightMax = max(dfs(node.right), 0)
      
      res[0] = max(res[0], node.val + leftMax + rightMax)
      
      return node.val + max(leftMax, rightMax)
    
    dfs(root)
    return res[0]


root = TreeNode(-10)
root.left = TreeNode(9)
root.right = TreeNode(20)

root.right.left = TreeNode(15)
root.right.right = TreeNode(7)

solution = Solution()
print('maxPathSum: ', solution.maxPathSum(root))
