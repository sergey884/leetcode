from typing import Optional

# Definition for a Node.
class Node:
  def __init__(self, val, left=None, right=None):
    self.val = val
    self.left = left
    self.right = right

class Solution:
  def treeToDoublyList(self, root: Optional[Node]) -> Optional[Node]:
    if not root:
      return None

    def inOrderTraversial(node):
      nonlocal first, last
      if node:
        inOrderTraversial(node.left)
        
        if last:
          last.right = node
          node.left = last
        else:
          first = node
        last = node
        
        inOrderTraversial(node.right)
    
    first, last = None, None  
    inOrderTraversial(root)
    first.left = last
    last.right = first

    return first
        
        
pTree = Node(4)
pTree.left = Node(2)
pTree.right = Node(5)

pTree.left.left = Node(1)
pTree.left.right = Node(3)

solution = Solution()
print('treeToDoublyList: ', solution.treeToDoublyList(pTree))
