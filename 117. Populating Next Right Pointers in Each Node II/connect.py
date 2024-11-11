# Definition for a Node.
from collections import deque

class Node:
  def __init__(self, val: int = 0, left: 'Node' = None, right: 'Node' = None, next: 'Node' = None):
    self.val = val
    self.left = left
    self.right = right
    self.next = next

class Solution:
  def connect(self, root: 'Node') -> 'Node':
    if not root:
      return root

    q = deque([root])
    
    while q:
      qSize = len(q)
      for i in range(qSize):
        node = q.popleft()
        
        if i < qSize - 1:
          node.next = q[0]
        else:
          node.next = None
          
        if node.left:
          q.append(node.left)
          
        if node.right:
          q.append(node.right)
    
    return root
        

root = Node(1)
root.left = Node(2)
root.right = Node(3)

root.left.left = Node(4)
root.left.right = Node(5)

root.right.right = Node(7)

solution = Solution()
print('connect: ', solution.connect(root))
