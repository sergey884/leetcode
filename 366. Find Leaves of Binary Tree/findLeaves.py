from typing import List, Optional

# Definition for a binary tree node.
class TreeNode:
  def __init__(self, val = 0, left = None, right = None):
    self.val = val
    self.left = left
    self.right = right

class Solution:
  def getHeight(self, node: Optional[TreeNode], res: List[List[int]]) -> int:
    if not node:
      return -1
    
    leftHeight = self.getHeight(node.left, res)
    rightHeight = self.getHeight(node.right, res)
    
    currentHeight = 1 + max(leftHeight, rightHeight)
    
    if currentHeight == len(res):
      res.append([])

    res[currentHeight].append(node.val)

    return currentHeight

  def findLeaves(self, root: Optional[TreeNode]) -> List[List[int]]:
    res = []
    self.getHeight(root, res)
    return res
