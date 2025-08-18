from typing import Optional
# Definition for a binary tree node.
class TreeNode:
  def __init__(self, val=0, left=None, right=None):
    self.val = val
    self.left = left
    self.right = right

class Solution:
  def addOneRow(self, root: Optional[TreeNode], val: int, depth: int) -> Optional[TreeNode]:
    if not root:
      return TreeNode(val)
    
    if depth == 1:
      newNode = TreeNode(val)
      newNode.left = root
      return newNode
    
    q = [(root, 1)]
    
    while q:
      node, currentDepth = q.pop(0)
      if currentDepth == depth - 1:
        newLeftNode = TreeNode(val)
        newRightNode = TreeNode(val)

        leftNode = node.left
        rightNode = node.right

        node.left = newLeftNode
        node.right = newRightNode
        
        node.left.left = leftNode
        node.right.right = rightNode
      else:
        if node.left:
          q.append([node.left, currentDepth + 1])
          
        if node.right:
          q.append([node.right, currentDepth + 1])
          
    return root


root = TreeNode(4)
root.left = TreeNode(2)
root.right = TreeNode(6)

root.left.left = TreeNode(3)
root.left.right = TreeNode(1)

root.right.left = TreeNode(5)

solution = Solution()
print('addOneRow: ', solution.addOneRow(root, 1, 2))
