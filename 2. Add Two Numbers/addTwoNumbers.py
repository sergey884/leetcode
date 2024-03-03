from typing import Optional, List
# Definition for singly-linked list.
class ListNode:
  def __init__(self, val=0, next=None):
    self.val = val
    self.next = next

# helper function got generate LinkedList from array
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
  def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
    carry = 0
    dummyHead = ListNode(0)
    curr = dummyHead

    while l1 or l2 or carry:
      l1Val = l1.val if l1 else 0
      l2Val = l2.val if l2 else 0

      sum = l1Val + l2Val + carry
      digit = sum % 10
      carry = sum // 10

      curr.next = ListNode(digit)
      curr = curr.next

      l1 = l1.next if l1 else None
      l2 = l2.next if l2 else None

    return dummyHead.next


l1 = arrayToLinkedList([2, 4, 3])
l2 = arrayToLinkedList([5, 6, 4])

solution = Solution()
print('addTwoNumbers: ', solution.addTwoNumbers(l1, l2).val)
