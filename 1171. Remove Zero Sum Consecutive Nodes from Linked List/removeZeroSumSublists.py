from typing import Optional, List
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
  def removeZeroSumSublists(self, head: Optional[ListNode]) -> Optional[ListNode]:
    dummy = ListNode(0, head)
    prefix_sum = 0
    prefix_to_node = { 0: dummy }
    curr = dummy
    
    while curr:
      prefix_sum += curr.val
      prefix_to_node[prefix_sum] = curr
      curr = curr.next
    
    curr = dummy
    prefix_sum = 0 
    while curr:
      prefix_sum += curr.val
      curr.next = prefix_to_node[prefix_sum].next
      curr = curr.next

    return dummy.next


solution = Solution()
head = arrayToLinkedList([1, 2, -3, 3, 1])
print('removeZeroSumSublists: ', solution.removeZeroSumSublists(head))
