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
  def mergeInBetween(self, list1: ListNode, a: int, b: int, list2: ListNode) -> ListNode:
    list1AthNode = list1
    list1BthNode = list1
  
    a -= 1
    while a > 0:
      list1AthNode = list1AthNode.next
      a -= 1

    b += 1
    while b > 0:
      list1BthNode = list1BthNode.next
      b -= 1

    list2LastNode = list2
    while list2LastNode.next:
      list2LastNode = list2LastNode.next

    list1AthNode.next = list2
    list2LastNode.next = list1BthNode

    return list1


list1 = arrayToLinkedList([10, 1, 13, 6, 9, 5])
list2 = arrayToLinkedList([1000000, 1000001, 1000002])
# [10,1,13,1000000,1000001,1000002,5]
a = 3
b = 4
solution = Solution()
print('mergeInBetween: ', solution.mergeInBetween(list1, a, b, list2))
