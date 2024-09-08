from typing import List, Optional

# Definition for a binary tree node.
class TreeNode:
  def __init__(self, val=0, left=None, right=None):
    self.val = val
    self.left = left
    self.right = right

class Solution:
  def pathSum(self, root: Optional[TreeNode], targetSum: int) -> List[List[int]]:
    res = []
    def dfs(node, path, target):
      if not node:
        return
      path.append(node.val)
      target -= node.val
      if not node.left and not node.right and target == 0:
        res.append(path.copy())

      dfs(node.left, path, target)
      dfs(node.right, path, target)

      path.pop()

    dfs(root, [], targetSum)
    return res
  

root = TreeNode(5)
root.left = TreeNode(4)
root.right = TreeNode(8)

root.left.left = TreeNode(11)

root.left.left.left = TreeNode(7)
root.left.left.right = TreeNode(2)

root.right.left = TreeNode(13)
root.right.right = TreeNode(4)

root.right.right.left = TreeNode(5)
root.right.right.right = TreeNode(1)

solution = Solution()
print('pathSum: ', solution.pathSum(root, 22)) # [[5, 4, 11, 2], [5, 8, 4, 5]]
