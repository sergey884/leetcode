from typing import  Optional
# Definition for a binary tree node.
class TreeNode:
  def __init__(self, val=0, left=None, right=None):
    self.val = val
    self.left = left
    self.right = right

class Solution:
  def sumNumbers(self, root: Optional[TreeNode]) -> int:
    res = 0
    def dfs(node, curr):
      nonlocal res
      if not node:
        return
      
      num = curr * 10 + node.val
      if not node.left and not node.right:
        res += num
        return
      
      if node.left:
        dfs(node.left, num)
        
      if node.right:
        dfs(node.right, num)
        
    dfs(root, 0)
    return res


root = TreeNode(1)
root.left = TreeNode(2)
root.right = TreeNode(3)

solution = Solution()
print('sumNumbers: ', solution.sumNumbers(root))
        
    
        
        