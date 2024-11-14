from typing import Optional

# Definition for a binary tree node.
class TreeNode:
  def __init__(self, val=0, left=None, right=None):
    self.val = val
    self.left = left
    self.right = right

class Solution:
  def distributeCoins(self, root: Optional[TreeNode]) -> int:
    self.moves = 0
    def dfs(node):
      if not node:
        return 0
      
      leftCoins = dfs(node.left)
      rightCoins = dfs(node.right)

      self.moves += abs(leftCoins) + abs(rightCoins)

      return (node.val - 1) + leftCoins + rightCoins
    
    dfs(root)
    return self.moves
  

root = TreeNode(0)
root.left = TreeNode(0)
root.right = TreeNode(2)

root.left.left = TreeNode(4)
root.left.right = TreeNode(0)

root.right.left = TreeNode(1)
root.right.right = TreeNode(0)

solution = Solution()
print('distributeCoins: ', solution.distributeCoins(root))
