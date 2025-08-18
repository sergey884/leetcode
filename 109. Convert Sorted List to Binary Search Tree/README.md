# [109. Convert Sorted List to Binary Search Tree](https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/description)

Given the head of a singly linked list where elements are sorted in ascending order, convert it to a height-balanced (A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.) binary search tree.


### Example 1:
![](./images/linked.jpg)
> Input: head = [-10,-3,0,5,9]
>
> Output: [0,-3,9,-10,null,5]
>
> Explanation: One possible answer is [0,-3,9,-10,null,5], which represents the shown height balanced BST.


### Example 2:
> Input: head = []
>
> Output: []
 

### Constraints:
- The number of nodes in head is in the range [0, 2 * 104].
- $-10^{5} <= Node.val <= 10^{5}$


## Solutions

### Performance

- **Time Complexity**: $O(n)$
- **Space Complexity**: $O(log n)$

### Javascript
```javascript
const sortedListToBST = (head) => {
  if (!head) {
    return null;
  }

  const findMiddle = (start) => {
    let slow = start;
    let fast = start;
    let prev = null;

    while (fast && fast.next) {
      prev = slow;
      fast = fast.next.next;
      slow = slow.next;
    }
    
    if (prev &&  prev.next) {
      prev.next = null;
    }

    return slow;
  }

  const mid = findMiddle(head);
  const root = new TreeNode(mid.val);

  if (mid === head) {
    return root;
  }

  root.left = sortedListToBST(head);
  root.right = sortedListToBST(mid.next);

  return root;
};
```

### Performance

- **Time Complexity**: $O(n)$
- **Space Complexity**: $O(log n)$

### Python
```python

```