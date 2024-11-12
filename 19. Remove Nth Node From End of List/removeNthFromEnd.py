# Definition for singly-linked list.
class ListNode:
  def __init__(self, val=0, next=None):
    self.val = val
    self.next = next

class Solution:
  def removeNthFromEnd(self, head: ListNode, n: int) -> ListNode:
    dummyNode = ListNode(0, head)
    fast, slow = head, dummyNode

    while n > 0 and fast:
      fast = fast.next
      n -= 1

    while fast:
      fast = fast.next
      slow = slow.next

    slow.next = slow.next.next

    return dummyNode.next


head = ListNode(1)
head.next = ListNode(2)
head.next.next = ListNode(3)
head.next.next.next = ListNode(4)
head.next.next.next.next = ListNode(5)

solution = Solution()
print('removeNthFromEnd: ', solution.removeNthFromEnd(head, 2))
