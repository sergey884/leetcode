# [117. Populating Next Right Pointers in Each Node II](https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/description/)

Given a binary tree
```
struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
```
Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to `NULL`.

Initially, all next pointers are set to `NULL`.


### Example 1:
![](./images/117_sample.png)
> Input: root = [1,2,3,4,5,null,7]
>
> Output: [1,#,2,3,#,4,5,7,#]
>
> Explanation: Given the above binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.


### Example 2:
> Input: root = []
>
> Output: []
 

### Constraints:
- The number of nodes in the tree is in the range [0, 6000].
- `-100 <= Node.val <= 100`
 

### Follow-up:
- You may only use constant extra space.
- The recursive approach is fine. You may assume implicit stack space does not count as extra space for this problem.


## Solutions

### Performance

- **Time Complexity**: `O(n)`
- **Space Complexity**: `O(n)`

### Javascript
```javascript
const connect = (root) => {
  if (!root) {
    return root;
  }

  const queue = [root];

  while (queue.length) {
    let queueSize = queue.length;

    for (let i = 0; i < queueSize; i++) {
      const node = queue.shift();

      if (i < queueSize - 1) {
        node.next = queue[0];
      } else {
        node.next = null;
      }

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }
  }

  return root;
};
```

### Performance

- **Time Complexity**: `O(n)`
- **Space Complexity**: `O(n)`

### Python
```python
class Solution:
  def connect(self, root: 'Node') -> 'Node':
    if not root:
      return root

    q = deque([root])
    
    while q:
      qSize = len(q)
      for i in range(qSize):
        node = q.popleft()
        
        if i < qSize - 1:
          node.next = q[0]
        else:
          node.next = None
          
        if node.left:
          q.append(node.left)
          
        if node.right:
          q.append(node.right)
    
    return root
```