# [25. Reverse Nodes in k-Group](https://leetcode.com/problems/reverse-nodes-in-k-group/description/)

Given the `head` of a linked list, reverse the nodes of the list `k` at a time, and return the modified list.

`k` is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of `k` then left-out nodes, in the end, should remain as it is.

You may not alter the values in the list's nodes, only nodes themselves may be changed.


### Example 1:
![](./images/reverse_ex1.jpg)
> Input: head = [1,2,3,4,5], k = 2
>
> Output: [2,1,4,3,5]

### Example 2:
![](./images/reverse_ex2.jpg)
> Input: head = [1,2,3,4,5], k = 3
>
> Output: [3,2,1,4,5]


### Constraints:
- The number of nodes in the list is `n`.
- `1 <= k <= n <= 5000`
- `0 <= Node.val <= 1000`


## Solutions

### Javascript
```javascript
```

### Python
```python
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
```

### Python (Iterative)
```python
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
```
