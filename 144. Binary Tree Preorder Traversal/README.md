# [144. Binary Tree Preorder Traversal](https://leetcode.com/problems/binary-tree-preorder-traversal/description/)

Given the `root` of a binary tree, return the preorder traversal of its nodes' values.


### Example 1:
> Input: `root = [1, null, 2, 3]`
>
> Output: `[1, 2, 3]`

### Example 2:
> Input: `root = []`
>
> Output: `[]`

### Example 3:
> Input: `root = [1]`
>
> Output: `[1]`


## Solutions

### Javascript (DFS - Depth-First Search)
```javascript
const preorderTraversal = (root) => {
  const res = [];
  const dfs = (node) => {
    if (!node) {
      return;
    }

    res.push(node.val);
  
    if (node.left) {
      dfs(node.left);
    }
    if (node.right) {
      dfs(node.right);
    }
  }

  dfs(root);
  return res;
};
```

### Javascript (Iterative)
```javascript
const preorderTraversal = (root) => {
  if (!root) {
    return [];
  }

  const res = [];
  const stack = [root];

  while(stack.length) {
    node = stack.pop();

    res.push(node.val)

    if (node.right) {
      stack.push(node.right);
    }

    if (node.left) {
      stack.push(node.left);
    }
  }

  return res;
};
```

### Python (DFS - Depth-First Search)
```python
class Solution:
  def preorderTraversal(self, root: Optional[TreeNode]) -> list[int]:
    res = []
    def dfs(node):
      if not node:
        return
      
      res.append(node.val)
      if node.left:
        dfs(node.left)
      if node.right:
        dfs(node.right)

    dfs(root)
    return res
```

### Python (Iterative)
```python
class Solution:
  def preorderTraversal(self, root: Optional[TreeNode]) -> list[int]:
    if not root:
      return []

    stack = [root]
    res = []

    while stack:
      node = stack.pop()
      res.append(node.val)

      if node.right:
        stack.append(node.right)

      if node.left:
        stack.append(node.left)

    return res
```