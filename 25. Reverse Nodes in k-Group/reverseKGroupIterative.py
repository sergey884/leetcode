from typing import Optional
# Definition for singly-linked list.
class ListNode:
  def __init__(self, val=0, next=None):
    self.val = val
    self.next = next

class Solution:
  def getKthNode(self, curr, k):
    while curr and k > 0:
      curr = curr.next
      k -= 1
    return curr

  def reverseKGroup(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
    dummyNode = ListNode(0, head)
    groupPrev = dummyNode

    while True:
      kth = self.getKthNode(groupPrev, k)
      if not kth:
        break

      groupNext = kth.next

      prev, curr = kth.next, groupPrev.next
      while curr != groupNext:
        tmp = curr.next
        curr.next = prev
        prev = curr
        curr = tmp

      tmp = groupPrev.next
      groupPrev.next = kth
      groupPrev = tmp

    return dummyNode.next

head = ListNode(1)
head.next = ListNode(2)
head.next.next = ListNode(3)
head.next.next.next = ListNode(4)
head.next.next.next.next = ListNode(5)

solution = Solution()
print('reverseList: ', solution.reverseKGroup(head, 2).val)