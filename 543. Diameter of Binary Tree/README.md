# [543. Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree/description/)

Given the `root` of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the `root`.

The length of a path between two nodes is represented by the number of edges between them.


### Example 1:
![](./images/diamtree.jpg)
> Input: `root = [1,2,3,4,5]`
>
> Output: `3`
>
> Explanation: `3 is the length of the path [4,2,1,3] or [5,2,1,3]`.


### Example 2:
> Input: `root = [1,2]`
>
> Output: `1`


### Constraints:
- The number of nodes in the tree is in the range `[1, 10^4]`.
- `-100 <= Node.val <= 100`


## Solutions

### Performance

- **Time Complexity**: `O(n)`
- **Space Complexity**: `O(h)` where h is tree height. Worst case scenario is `O(n)`, in case of balanced tree `O(log N)`

### Javascript
```javascript
const diameterOfBinaryTree = (root) => {
  let diameter = 0;

  const dfs = (node) => {
    if (!node) {
      return 0;
    }

    const left = dfs(node.left);
    const right = dfs(node.right);

    diameter = Math.max(diameter, left + right);

    return Math.max(left, right) + 1;
  }

  dfs(root);
  return diameter;
};
```

### Performance

- **Time Complexity**: `O(n)`
- **Space Complexity**: `O(h)` where h is tree height. Worst case scenario is `O(n)`, in case of balanced tree `O(log N)`

### Python
```python
class Solution:
  def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
    def dfs(node):
      if not node:
        return 0
      
      leftDepth = dfs(node.left)
      rightDepth = dfs(node.right)

      self.maxDiameter = max(self.maxDiameter, leftDepth + rightDepth)

      return max(leftDepth, rightDepth) + 1
    
    self.maxDiameter = 0
    dfs(root)

    return self.maxDiameter
```