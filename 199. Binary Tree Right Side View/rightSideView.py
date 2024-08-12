from collections import deque
from typing import List, Optional

# Definition for a binary tree node.
class TreeNode:
  def __init__(self, val=0, left=None, right=None):
    self.val = val
    self.left = left
    self.right = right

class Solution:
  def rightSideView(self, root: Optional[TreeNode]) -> List[int]:
    if not root:
      return []

    nextLevel = deque([root])
    rightSideNodes = []

    while nextLevel:
      currLevel = nextLevel
      nextLevel = deque()

      while currLevel:
        node = currLevel.popleft()

        if node.left:
          nextLevel.append(node.left)


        if node.right:
          nextLevel.append(node.right)
        
      rightSideNodes.append(node.val)

    return rightSideNodes

  
root = TreeNode(1)
root.left = TreeNode(2)
root.right = TreeNode(3)

root.left.right = TreeNode(5)
root.right.right = TreeNode(4)

solution = Solution()
print('rightSideView: ', solution.rightSideView(root))
