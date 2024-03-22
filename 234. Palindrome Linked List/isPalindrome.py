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
  def isPalindrome(self, head: Optional[ListNode]) -> bool:
    slow = head
    fast = head

    while fast and fast.next:
      fast = fast.next.next
      slow = slow.next

    prev = None
    while slow:
      tempNext = slow.next
      slow.next = prev
      prev = slow
      slow = tempNext

    left, right = head, prev
    while right:
      if left.val != right.val:
        return False
      
      left = left.next
      right = right.next

    return True
  
head = arrayToLinkedList([1, 2, 2, 1])
solution = Solution()
print('isPalindrome: ', solution.isPalindrome(head))
