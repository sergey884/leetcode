# [19. Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/)

Given the `head` of a linked list, remove the `nth` node from the end of the list and return its head.

### Example 1:
![](./images/remove_ex1.jpg)
> Input: `head = [1,2,3,4,5], n = 2`
>
> Output: `[1,2,3,5]`


### Example 2:
> Input: `head = [1], n = 1`
>
> Output: `[]`


### Example 3:
> Input: `head = [1,2], n = 1`
>
> Output: `[1]`
 

### Constraints:
- The number of nodes in the list is `sz`.
- `1 <= sz <= 30`
- `0 <= Node.val <= 100`
- `1 <= n <= sz`
 

**Follow up:** Could you do this in one pass?


## Solutions

### Javascript
```javascript
var removeNthFromEnd = function(head, n) {
  const dummyHead = new ListNode(0, head);
  let slow = dummyHead;
  let fast = head;

  while (n > 0 && fast) {
    fast = fast.next;
    n--;
  }

  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }

  slow.next = slow.next.next;

  return dummyHead.next;
};
```

### Python
```python
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
```