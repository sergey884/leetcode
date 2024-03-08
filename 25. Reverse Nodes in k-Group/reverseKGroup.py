from typing import Optional
# Definition for singly-linked list.
class ListNode:
  def __init__(self, val=0, next=None):
    self.val = val
    self.next = next

class Solution:
  def reverseList(self, start, end):
    prev = None,
    curr = start

    while curr != end:
      temp = curr.next
      curr.next = prev
      prev = curr
      curr = temp
      
    return prev

  def reverseKGroup(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
    count = 0
    curr = head
    while count < k and curr:
      curr = curr.next
      count += 1

    if count == k:
      newHead = self.reverseList(head, curr)
      head.next = self.reverseKGroup(curr, k)

      return newHead
    
    return head


#  1 -> 2 -> 3 -> 4 -> 5
#  1 <- 2 <- 3 -> 4 -> 5
head = ListNode(1)
head.next = ListNode(2)
head.next.next = ListNode(3)
head.next.next.next = ListNode(4)
head.next.next.next.next = ListNode(5)

solution = Solution()
print('reverseList: ', solution.reverseKGroup(head, 2).val)