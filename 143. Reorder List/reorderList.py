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
  def reorderList(self, head: Optional[ListNode]) -> None:
    """
    Do not return anything, modify head in-place instead.
    """
    slow, fast = head, head.next
    while fast and fast.next:
      slow = slow.next
      fast = fast.next.next
    
    second = slow.next
    prev = slow.next = None
    while second:
      temp = second.next
      second.next = prev
      prev = second
      second = temp
      
    first, second = head, prev
    while second:
      temp1 = first.next
      temp2 = second.next
      first.next = second
      second.next = temp1
      first = temp1
      second = temp2

      
# [1,2, 3,4, 5]
# [1,5, 2,4, 3]     
        
solution = Solution()
head = arrayToLinkedList([1,2,3,4])
print('reorderList: ', solution.reorderList(head))
