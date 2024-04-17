from typing import Optional
# Definition for a binary tree node.
class TreeNode:
  def __init__(self, val=0, left=None, right=None):
    self.val = val
    self.left = left
    self.right = right

class Solution:
  def smallestFromLeaf(self, root: Optional[TreeNode]) -> str:
    res = '~'
    def dfs(node, path):
      nonlocal res
      if not node:
        return
      
      path.append(chr(97 + node.val))

      if not node.left and not node.right:
        pathStr = ''.join(reversed(path))
        res = min(res, pathStr)
        
      if node.left:
        dfs(node.left, path)
        
      if node.right:
        dfs(node.right, path)
        
      path.pop()
    
    dfs(root, [])
    return res
  

root = TreeNode(0)
root.left = TreeNode(1)
root.right = TreeNode(2)

root.left.left = TreeNode(3)
root.left.right = TreeNode(4)

root.right.left = TreeNode(3)
root.right.right = TreeNode(4)

solution = Solution()
print('smallestFromLeaf: ', solution.smallestFromLeaf(root))
