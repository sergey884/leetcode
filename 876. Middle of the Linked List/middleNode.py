from typing import Optional, List
# Definition for singly-linked list.
class ListNode:
  def __init__(self, val = 0, next = None):
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
  def middleNode(self, head: Optional[ListNode]) -> Optional[ListNode]:
    slow = head
    fast = head

    while fast and fast.next:
      slow = slow.next
      fast = fast.next.next
    
    return slow

head = arrayToLinkedList([1, 2, 3, 4, 5, 6])
solution = Solution()
print('middleNode: ', solution.middleNode(head))
