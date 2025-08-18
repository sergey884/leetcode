from typing import List, Optional

# Definition for singly-linked list.
class ListNode:
  def __init__(self, val=0, next=None):
    self.val = val
    self.next = next

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
  def partition(self, head: Optional[ListNode], x: int) -> Optional[ListNode]:
    leftDummy, rightDummy = ListNode(), ListNode()
    left, right = leftDummy, rightDummy

    curr = head
    while curr:
      if curr.val < x:
        left.next = curr
        left = left.next
      else:
        right.next = curr
        right = right.next
      curr = curr.next
    
    right.next = None
    left.next = rightDummy.next

    return leftDummy.next


head = arrayToLinkedList([1, 4, 3, 2, 5, 2])
x = 3
solution = Solution()
print('partition: ', solution.partition(head, x))
