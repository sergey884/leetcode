# [86. Partition List](https://leetcode.com/problems/partition-list/description/)

Given the `head` of a linked list and a value `x`, partition it such that all nodes **less than** `x` come before nodes **greater than or equal** to `x`.

You should **preserve** the original relative order of the nodes in each of the two partitions.


### Example 1:
![](./images/partition.jpg)
> Input: head = [1,4,3,2,5,2], x = 3
>
> Output: [1,2,2,4,3,5]


### Example 2:
> Input: head = [2,1], x = 2
>
> Output: [1,2]
 

### Constraints:
- The number of nodes in the list is in the range [0, 200].
- `-100 <= Node.val <= 100`
- `-200 <= x <= 200`


## Solutions

### Performance

- **Time Complexity**: `O(n)`
- **Space Complexity**: `O(1)`

### Javascript

```javascript
const partition = (head, x) => {
  const dummyLeft = new ListNode();
  const dummyRight = new ListNode();
  let left = dummyLeft;
  let right = dummyRight;

  let curr = head;
  while (curr) {
    if (curr.val < x) {
      left.next = curr;
      left = left.next;
    } else {
      right.next = curr;
      right = right.next;
    }
    curr = curr.next;
  }

  right.next = null;
  left.next = dummyRight.next;

  return dummyLeft.next;
};
```

### Performance

- **Time Complexity**: `O(n)`
- **Space Complexity**: `O(1)`

### Python

```python
class Solution:
  def partition(self, head: Optional[ListNode], x: int) -> Optional[ListNode]:
    leftDummy, rightDummy = ListNode(), ListNode()
    left, right = leftDummy, rightDummy

    curr = head
    while curr:
      if curr.val < x:
        left.next = curr
        left = left.next
      else:
        right.next = curr
        right = right.next
      curr = curr.next
    
    right.next = None
    left.next = rightDummy.next

    return leftDummy.next
```
