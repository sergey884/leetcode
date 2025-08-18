# [111. Minimum Depth of Binary Tree](https://leetcode.com/problems/minimum-depth-of-binary-tree/description/)

Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

**Note:** A leaf is a node with no children.


### Example 1:
![](./images/ex_depth.jpg)
> Input: root = [3,9,20,null,null,15,7]
>
> Output: 2


### Example 2:
> Input: root = [2,null,3,null,4,null,5,null,6]
>
> Output: 5
 

### Constraints:
- The number of nodes in the tree is in the range $[0, 10^{5}]$.
- `-1000 <= Node.val <= 1000`


## Solutions

### Performance

- **Time Complexity**: `O(n)`
- **Space Complexity**: `O(n)`

### Javascript
```javascript
const minDepth = (root) => {
  const dfs = (node) => {
    if (!node) {
      return 0;
    }

    if (!node.left) {
      return dfs(node.right) + 1;
    }

    if (!node.right) {
      return dfs(node.left) + 1;
    }

    return Math.min(dfs(node.left), dfs(node.right)) + 1; 
  }

  return dfs(root);
};
```

### Performance

- **Time Complexity**: `O(n)`
- **Space Complexity**: `O(n)`

### Python
```python
class Solution:
  def minDepth(self, root: Optional[TreeNode]) -> int:
    def dfs(node):
      if not node:
        return 0
      
      if not node.left:
        return dfs(node.right) + 1
      
      if not node.right:
        return dfs(node.left) + 1

      return min(dfs(node.left), dfs(node.right)) + 1
    
    return dfs(root)
```