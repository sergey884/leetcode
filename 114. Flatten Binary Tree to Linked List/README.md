# [114. Flatten Binary Tree to Linked List](https://leetcode.com/problems/flatten-binary-tree-to-linked-list/description/)

Given the `root` of a binary tree, flatten the tree into a "linked list":

- The "linked list" should use the same TreeNode class where the right child pointer points to the next node in the list and the left child pointer is always null.
- The "linked list" should be in the same order as a [pre-order traversal](https://en.wikipedia.org/wiki/Tree_traversal#Pre-order,_NLR) of the binary tree.


### Example 1:
![](./images/flaten.jpg)
> Input: root = [1,2,5,3,4,null,6]
>
> Output: [1,null,2,null,3,null,4,null,5,null,6]


### Example 2:
> Input: root = []
>
> Output: []


### Example 3:
> Input: root = [0]
>
> Output: [0]
 

### Constraints:
- The number of nodes in the tree is in the range [0, 2000].
- `-100 <= Node.val <= 100`


**Follow up:** Can you flatten the tree in-place (with `O(1)` extra space)?


## Solutions

### Performance

- **Time Complexity**: `O(n)`
- **Space Complexity**: `O(h)`

### Javascript (Recursive)
```javascript
const flatten = (root) => {
  if (!root) {
    return;
  }

  flatten(root.right);
  flatten(root.left);

  const left = root.left;
  const right = root.right;

  root.right = left;
  root.left = null;

  let rightMost = root;
  while (rightMost.right) {
    rightMost = rightMost.right;
  }
  rightMost.right = right;
};
```

### Performance

- **Time Complexity**: `O(n)`
- **Space Complexity**: `O(h)`

### Javascript (Iterative (stack))
```javascript
const flatten = (root) => {
  if (!root) {
    return;
  }

  const stack = [root];

  while (stack.length) {
    const node = stack.pop();
    if (node.right) {
      stack.push(node.right);
    }
    if (node.left) {
      stack.push(node.left);
    }
    if (stack.length) {
      node.right = stack[stack.length - 1];
    }
    node.left = null;
  }
};
```

### Performance

- **Time Complexity**: `O(n)`
- **Space Complexity**: `O(h)`

### Python (Recursive)
```python
class Solution:
  def flatten(self, root: Optional[TreeNode]) -> None:
    """
    Do not return anything, modify root in-place instead.
    """
    if not root:
      return
    
    self.flatten(root.left)
    self.flatten(root.right)
    
    left = root.left
    right = root.right
    
    root.left = None
    root.right = left
    
    rightmost = root
    while rightmost.right:
      rightmost = rightmost.right
    rightmost.right = right
```

### Performance

- **Time Complexity**: `O(n)`
- **Space Complexity**: `O(h)`

### Python (Iterative (stack))
```python
class Solution:
  def flatten(self, root: Optional[TreeNode]) -> None:
    """
    Do not return anything, modify root in-place instead.
    """
    if not root:
      return
    
    stack = [root]
    
    while stack:
      node = stack.pop()
      if node.right:
        stack.append(node.right)
      if node.left:
        stack.append(node.left)
      if stack:
        node.right = stack[-1]
      node.left = None
```