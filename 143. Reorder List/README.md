# [143. Reorder List](https://leetcode.com/problems/reorder-list/description/)

You are given the head of a singly linked-list. The list can be represented as:

$L_0$ → $L_1$ → … → $L_{n - 1}$ → $L_n$

Reorder the list to be on the following form:

$L_0$ → $L_n$ → $L_1$ → $L_{n - 1}$ → $L_2$ → $L_{n - 2}$ → …

You may not modify the values in the list's nodes. Only nodes themselves may be changed.


### Example 1:
![](./images/reorder1linked-list.jpg)
> Input: head = [1,2,3,4]
>
> Output: [1,4,2,3]


### Example 2:
![](./images/reorder2-linked-list.jpg)
> Input: head = [1,2,3,4,5]
>
> Output: [1,5,2,4,3]


### Constraints:
- The number of nodes in the list is in the range [1, 5 * $10^4$].
- `1 <= Node.val <= 1000`


## Solutions

### Performance

- **Time Complexity**: $O(n)$
- **Space Complexity**: $O(1)$

### Javascript
```javascript
const reorderList = (head) => {
  let slow = head;
  let fast = head.next;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let second = slow.next;
  let prev = slow.next = null;
  while (second) {
    let temp = second.next;
    second.next = prev;
    prev = second;
    second = temp;
  }

  let first = head;
  second = prev;
  while (second) {
    let temp1 = first.next;
    let temp2 = second.next;
    first.next = second;
    second.next = temp1;
    first = temp1;
    second = temp2;
  }
};
```

### Performance

- **Time Complexity**: $O(n)$
- **Space Complexity**: $O(1)$

### Python
```python
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
```