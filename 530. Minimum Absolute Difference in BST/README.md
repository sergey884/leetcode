# [530. Minimum Absolute Difference in BST](https://leetcode.com/problems/minimum-absolute-difference-in-bst/description/)

Given the `root` of a Binary Search Tree (BST), return the minimum absolute difference between the values of any two different nodes in the tree.


### Example 1:
![](./images/bst1.jpg)
> Input: root = [4,2,6,1,3]
>
> Output: 1


### Example 1:
![](./images/bst2.jpg)
> Input: root = [1,0,48,null,null,12,49]
>
> Output: 1
 

### Constraints:
- The number of nodes in the tree is in the range $[2, 10^{4}]$.
- $0 <= Node.val <= 10^{5}$
 

**Note:** This question is the same as 783: https://leetcode.com/problems/minimum-distance-between-bst-nodes/


## Solutions

### Performance

- **Time Complexity**: `O(n)`
- **Space Complexity**: `O(1)`

### Javascript

```javascript
const getMinimumDifference = (root) => {
  let prev = null;
  let minDiff = Infinity;

  const inorderTraversal = (node) => {
    if (!node) {
      return;
    }

    inorderTraversal(node.left);

    if (prev) {
      const diff = Math.abs(node.val - prev.val);
      minDiff = Math.min(minDiff, diff);
    }

    prev = node;

    inorderTraversal(node.right);
  }

  inorderTraversal(root);
  return minDiff;
};
```

### Performance

- **Time Complexity**: `O(n)`
- **Space Complexity**: `O(1)`

### Python

```python
class Solution:
  def getMinimumDifference(self, root: Optional[TreeNode]) -> int:
    prev = None
    minDiff = float('inf')

    def inorderTraversal(node):
      nonlocal minDiff, prev
      if not node:
        return
      
      inorderTraversal(node.left)

      if prev is not None:
        diff = abs(node.val - prev.val)
        minDiff = min(minDiff, diff)

      prev = node
      
      inorderTraversal(node.right)


    inorderTraversal(root)
    return minDiff
```
