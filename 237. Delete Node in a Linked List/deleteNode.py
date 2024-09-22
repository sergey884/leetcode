# Definition for singly-linked list.
from typing import List, Optional

class ListNode:
  def __init__(self, x):
    self.val = x
    self.next = None

# helper function to generate LinkedList from array
def arrayToLinkedList(arr: Optional[List]) -> Optional[ListNode]:
  if not arr:
    return None

  dummyHead = ListNode(0)
  curr = dummyHead

  for i in range(len(arr)):
    node = ListNode(arr[i])
    curr.next = node
    curr = curr.next
  
  return dummyHead.next

class Solution:
  def deleteNode(self, node):
    """
    :type node: ListNode
    :rtype: void Do not return anything, modify node in-place instead.
    """
    node.val = node.next.val
    node.next = node.next.next


head = arrayToLinkedList([4, 5, 1, 9])
node = head.next
solution = Solution()
solution.deleteNode(node)
while head:
  print(head.val)
  head = head.next