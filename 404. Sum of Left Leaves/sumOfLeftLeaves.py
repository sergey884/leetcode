from typing import Optional
# Definition for a binary tree node.
class TreeNode:
  def __init__(self, val=0, left=None, right=None):
    self.val = val
    self.left = left
    self.right = right

class Solution:
  def sumOfLeftLeaves(self, root: Optional[TreeNode]) -> int:
    def dfs(node, currentSum):
      if not node:
        return
      
      if node.left and not node.left.left and not node.left.right:
        currentSum += node.left.val
        
      if node.left:
        currentSum = dfs(node.left, currentSum)
        
      if node.right:
        currentSum = dfs(node.right, currentSum)
      
      return currentSum
        
    leftNodesSum = dfs(root, 0)
    return leftNodesSum
  

root = TreeNode(3)
root.left = TreeNode(9)
root.right = TreeNode(20)

root.right.left = TreeNode(15)
root.right.right = TreeNode(7)

solution = Solution()
print('sumOfLeftLeaves: ', solution.sumOfLeftLeaves(root))
