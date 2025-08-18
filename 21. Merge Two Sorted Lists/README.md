# [21. Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/description)

You are given the heads of two sorted linked lists `list1` and `list2`.

Merge the two lists into one **sorted** list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.


### Example 1:
![](./images/merge_ex1.jpg)
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]


### Example 2:
> Input: list1 = [], list2 = []
>
> Output: []


### Example 3:
> Input: list1 = [], list2 = [0]
>
> Output: [0]
 

### Constraints:
- The number of nodes in both lists is in the range `[0, 50]`.
- `-100 <= Node.val <= 100`
- Both `list1` and `list2` are sorted in **non-decreasing** order.


## Solutions

### Performance

- **Time Complexity**: $O(N + M)$
- **Space Complexity**: $O(1)$

### Javascript
```javascript
const mergeTwoLists = (list1, list2) => {
  if (!list1 && !list2) {
    return null;
  }

  const dummyHead = new ListNode(0);
  let l1Ptr = list1;
  let l2Ptr = list2;
  let curr = dummyHead;
  while (l1Ptr && l2Ptr) {
    if (l1Ptr.val > l2Ptr.val) {
      curr.next = l2Ptr;
      l2Ptr = l2Ptr.next
    } else {
      curr.next = l1Ptr;   
      l1Ptr = l1Ptr.next
    }
    curr = curr.next;
  }

  curr.next = l1Ptr || l2Ptr;
  
  return dummyHead.next;
};
```

### Performance

- **Time Complexity**: $O(N + M)$
- **Space Complexity**: $O(N + M)$

### Javascript (Recursion)
```javascript
const mergeTwoLists = (list1, list2) => {
  if (!list1 && !list2) {
    return null;
  }

  if (!list1) {
    return list2;
  }

  if (!list2) {
    return list1;
  }

  if (list1.val > list2.val) {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  } else {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  }
};
```

### Performance

- **Time Complexity**: $O(n)$
- **Space Complexity**: $O(1)$

### Python
```python

```