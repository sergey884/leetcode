from typing import Optional
# Definition for a binary tree node.
class TreeNode:
  def __init__(self, val=0, left=None, right=None):
    self.val = val
    self.left = left
    self.right = right

class Solution:
  def upsideDownBinaryTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
    if not root or not root.left:
      return root
    
    leftChild = root.left
    rightChild = root.right
    
    newRoot = self.upsideDownBinaryTree(leftChild)

    leftChild.right = root
    leftChild.left = rightChild
    root.left = None
    root.right = None

    return newRoot


root = TreeNode(1)
root.left = TreeNode(2)
root.right = TreeNode(3)

root.left.left = TreeNode(4)
root.left.right = TreeNode(5)

solution = Solution()
print('upsideDownBinaryTree: ', solution.upsideDownBinaryTree(root))


