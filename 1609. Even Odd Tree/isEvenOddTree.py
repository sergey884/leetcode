
from collections import deque
from typing import Optional
# Definition for a binary tree node.
class TreeNode:
  def __init__(self, val=0, left=None, right=None):
    self.val = val
    self.left = left
    self.right = right

class Solution:
  def isEvenOddTree(self, root: Optional[TreeNode]) -> bool:
    level = 0
    even = True
    queue = deque([root])

    while queue:
      prev = float('-Inf') if even  else float('Inf')
      for _ in range(len(queue)):
        node = queue.popleft()

        if even and (node.val % 2 == 0 or node.val <= prev):
          return False
        elif not even and (node.val % 2 == 1 or node.val >= prev):
          return False
        
        if node.left:
          queue.append(node.left)

        if node.right:
          queue.append(node.right)

        prev = node.val
      even = not even
    
    return True


root = TreeNode(1)
root.left = TreeNode(10)
root.right = TreeNode(4)

root.left.left = TreeNode(3)

root.left.left.left = TreeNode(12)
root.left.left.right = TreeNode(8)

root.right.left = TreeNode(7)
root.right.right = TreeNode(9)

root.right.left.left = TreeNode(6)
root.right.right.right = TreeNode(2)

solution = Solution()
print('isEvenOddTree: ', solution.isEvenOddTree(root))

