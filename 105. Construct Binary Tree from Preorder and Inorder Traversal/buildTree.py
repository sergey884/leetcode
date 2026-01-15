from typing import List, Optional

# Definition for a binary tree node.
class TreeNode:
  def __init__(self, val=0, left=None, right=None):
    self.val = val
    self.left = left
    self.right = right

class Solution:
  def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:
    if not preorder or not inorder:
      return None
    
    root_val = preorder[0]
    root = TreeNode(root_val)
    
    root_index_in_inorder = inorder.index(root_val)
    
    left_inorder = inorder[:root_index_in_inorder]
    right_inorder = inorder[root_index_in_inorder + 1:]
    
    left_preopder = preorder[1:1 + len(left_inorder)]
    right_preopder = preorder[1 + len(left_inorder):]
    
    root.left = self.buildTree(left_preopder, left_inorder)
    root.right = self.buildTree(right_preopder, right_inorder)
    
    return root


preorder = [3, 9, 20, 15, 7]
inorder = [9, 3, 15, 20, 7]
solution = Solution()
print('buildTree: ', solution.buildTree(preorder, inorder))
