# [2. Add Two Numbers](https://leetcode.com/problems/add-two-numbers/description/)

You are given two **non-empty** linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.


### Example 1:
![](./images/addtwonumber1.jpg)
> Input: `l1 = [2,4,3], l2 = [5,6,4]`
>
> Output: `[7,0,8]`
>
> Explanation: `342 + 465 = 807.`


### Example 2:
> Input: l1 = [0], l2 = [0]
>
> Output: [0]


### Example 3:
> Input: `l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]`
>
> Output: `[8,9,9,9,0,0,0,1]`


### Constraints:
- The number of nodes in each linked list is in the range `[1, 100]`.
- `0 <= Node.val <= 9`
- It is guaranteed that the list represents a number that does not have leading zeros.


## Solutions

### Javascript
```javascript
const addTwoNumbers = function(l1, l2) {
  const dummyHead = new ListNode(0);
  let curr = dummyHead;
  let carry = 0;

  while (l1 || l2 || carry) {
    let l1Val = l1 ? l1.val : 0;
    let l2Val = l2 ? l2.val : 0;

    let sum = l1Val + l2Val + carry;
    let digit = sum % 10;
    carry = Math.floor(sum / 10);

    curr.next = new ListNode(digit);
    curr = curr.next;

    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }

  return dummyHead.next;
};
```

### Python
```python
class Solution:
  def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
    carry = 0
    dummyHead = ListNode(0)
    curr = dummyHead

    while l1 or l2 or carry:
      l1Val = l1.val if l1 else 0
      l2Val = l2.val if l2 else 0

      sum = l1Val + l2Val + carry
      digit = sum % 10
      carry = sum // 10

      curr.next = ListNode(digit)
      curr = curr.next

      l1 = l1.next if l1 else None
      l2 = l2.next if l2 else None

    return dummyHead.next
```