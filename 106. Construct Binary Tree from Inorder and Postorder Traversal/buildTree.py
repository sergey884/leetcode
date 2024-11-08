from typing import List, Optional

# Definition for a binary tree node.
class TreeNode:
  def __init__(self, val=0, left=None, right=None):
    self.val = val
    self.left = left
    self.right = right

class Solution:
  def buildTree(self, inorder: List[int], postorder: List[int]) -> Optional[TreeNode]:
    inToIndex = { num: i for i, num in enumerate(inorder) }
    
    def build(inStart, inEnd, posStart, posEnd):
      if inStart > inEnd:
        return None

      rootVal = postorder[posEnd]
      rootInIndex = inToIndex[rootVal]
      leftSize = rootInIndex - inStart
      
      root = TreeNode(rootVal)
      root.left = build(inStart, rootInIndex - 1, posStart, posStart + leftSize - 1)
      root.right = build(rootInIndex + 1, inEnd, posStart + leftSize, posEnd - 1)
      
      return root
    
    return build(0, len(inorder) - 1, 0, len(postorder) - 1)
    

inorder = [9, 3, 15, 20, 7]
postorder = [9, 15, 7, 20, 3]
solution = Solution()
print("buildTree: ", solution.buildTree(inorder, postorder))
