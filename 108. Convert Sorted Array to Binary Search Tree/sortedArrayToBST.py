from typing import Optional, List
# Definition for a binary tree node.
class TreeNode:
  def __init__(self, val=0, left=None, right=None):
    self.val = val
    self.left = left
    self.right = right

class Solution:
  def sortedArrayToBST(self, nums: List[int]) -> Optional[TreeNode]:
    def createTree(left, right):
      if left > right:
        return None
      
      mid = (left + right) // 2
      root = TreeNode(nums[mid])
      root.left = createTree(left, mid - 1)
      root.right = createTree(mid + 1, right)
      
      return root
    
    return createTree(0, len(nums) - 1)


nums = [-10, -3, 0, 5, 9]
solution = Solution()
print('sortedArrayToBST: ', solution.sortedArrayToBST(nums))
