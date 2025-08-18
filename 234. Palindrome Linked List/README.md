# [234. Palindrome Linked List](https://leetcode.com/problems/palindrome-linked-list/description/)

Given the head of a singly linked list, return true if it is a palindrome (a palindrome is a sequence that reads the same forward and backward) or false otherwise.


### Example 1:
![](./images/pal1linked-list.jpg)
> Input: head = [1,2,2,1]
>
> Output: true


### Example 2:
![](./images/pal2linked-list.jpg)
> Input: head = [1,2]
>
> Output: false
 

### Constraints:
- The number of nodes in the list is in the range [1, $10^5$].
- `0 <= Node.val <= 9`
 

**Follow up:** Could you do it in O(n) time and O(1) space?


## Solutions

### Javascript
```javascript
const isPalindrome = (head) => {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let prev = null;
  while (slow) {
    let temp = slow.next;
    slow.next = prev;
    prev = slow
    slow = temp;
  }

  let left = head;
  let right = prev;
  while (right) {
    if (left.val !== right.val) {
      return false;
    }
    left = left.next;
    right = right.next;
  }

  return true;
};
```

### Python
```python
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
```