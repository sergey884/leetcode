# [222. Count Complete Tree Nodes](https://leetcode.com/problems/count-complete-tree-nodes/description/)

Given the `root` of a **complete** binary tree, return the number of the nodes in the tree.

According to [Wikipedia](https://en.wikipedia.org/wiki/Binary_tree#Types_of_binary_trees), every level, except possibly the last, is completely filled in a complete binary tree, and all nodes in the last level are as far left as possible. It can have between `1` and $2^{h}$ nodes inclusive at the last level `h`.

Design an algorithm that runs in less than `O(n)` time complexity.


### Example 1:
![](./images/complete.jpg)
> Input: root = [1,2,3,4,5,6]
>
> Output: 6


### Example 2:
> Input: root = []
>
> Output: 0


### Example 3:
> Input: root = [1]
>
> Output: 1
 

### Constraints:
- The number of nodes in the tree is in the range $[0, 5 * 10^{4}]$.
- $0 <= Node.val <= 5 * 10^{4}$
- The tree is guaranteed to be **complete**.


## Solutions

### Performance

- **Time Complexity**: `O(n)`
- **Space Complexity**: `O(h)`

### Javascript
```javascript
const countNodes = (root) => {
  if (!root) {
    return 0;
  }

  const left = countNodes(root.left);
  const right = countNodes(root.right);

  return 1 + left + right;
};
```

### Performance

- **Time Complexity**: $O((log n)^{2})$
- **Space Complexity**: $O(log n)$

### Javascript
```javascript
const countNodes = (root) => {
  if (!root) {
    return 0;
  }

  let left = root;
  let right = root;
  let leftDepth = 0;
  let rightDepth = 0;

  while (left) {
    leftDepth++;
    left = left.left
  }

  while (left) {
    rightDepth++;
    right = right.right
  }

  if (leftDepth === rightDepth) {
    return Math.pow(2, leftDepth) - 1;
  }

  return 1 + countNodes(root.left) + countNodes(root.right);
};
```

### Performance

- **Time Complexity**: `O(n)`
- **Space Complexity**: `O(h)`

### Python
```python
class Solution:
  def countNodes(self, root: Optional[TreeNode]) -> int:
    if not root:
      return 0
    
    left = self.countNodes(root.left)
    right = self.countNodes(root.right)
    
    return 1 + left + right
```

### Performance

- **Time Complexity**: $O((log n)^{2})$
- **Space Complexity**: $O(log n)$

### Python
```python
class Solution:
  def countNodes(self, root: Optional[TreeNode]) -> int:
    if not root:
      return 0
    
    left = root
    right = root
    leftDepth = 0
    rightDepth = 0
    
    while left:
      leftDepth += 1
      left = left.left
      
    while right:
      rightDepth += 1
      right = right.right
      
    if leftDepth == rightDepth:
      return pow(2, leftDepth) - 1
    
    return 1 + self.countNodes(root.left) + self.countNodes(root.right)
```