from typing import List, Optional

# Definition for a binary tree node.
class TreeNode:
  def __init__(self, val=0, left=None, right=None):
    self.val = val
    self.left = left
    self.right = right

class Solution:
  def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:
    inToIndex = { num: i for i, num in enumerate(inorder) }
    def build(preStart: int, preEnd: int, inStart: int, inEnd: int) -> Optional[TreeNode]:
      if preStart > preEnd:
        return None
      
      rootVal = preorder[preStart]
      rootInOrderIndex = inToIndex[rootVal]
      leftSize = rootInOrderIndex - inStart
      
      root = TreeNode(rootVal)
      root.left = build(preStart + 1, preStart + leftSize, inStart, rootInOrderIndex - 1)
      root.right = build(preStart + leftSize + 1, preEnd, rootInOrderIndex + 1, inEnd)
      
      return root
    
    return build(0, len(preorder) - 1, 0, len(inorder) - 1)


preorder = [3, 9, 20, 15, 7]
inorder = [9, 3, 15, 20, 7]
solution = Solution()
print('buildTree: ', solution.buildTree(preorder, inorder))
