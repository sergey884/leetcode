# [404. Sum of Left Leaves](https://leetcode.com/problems/sum-of-left-leaves/description/)

Given the `root` of a binary tree, return the sum of all left leaves.

A **leaf** is a node with no children. A **left leaf** is a leaf that is the left child of another node.

### Example 1:
![](./images/leftsum-tree.jpg)
> Input: root = [3,9,20,null,null,15,7]
>
> Output: 24
>
> Explanation: There are two left leaves in the binary tree, with values 9 and 15 respectively.


### Example 2:
> Input: root = [1]
>
> Output: 0
 

### Constraints:
- The number of nodes in the tree is in the range `[1, 1000]`.
- `-1000 <= Node.val <= 1000`


## Solutions

### Javascript
```javascript
const sumOfLeftLeaves = (root) => {
  const dfs = (node, currentSum) => {
    if (!node) {
      return;
    }

    if (node.left && !node.left.left && !node.left.right) {
      currentSum += node.left.val;
    }

    if (node.left) {
      currentSum = dfs(node.left, currentSum);
    }

    if (node.right) {
      currentSum = dfs(node.right, currentSum);
    }

    return currentSum;
  };

  const leftNodesSum = dfs(root, 0);
  return leftNodesSum;
};
```

### Python
```python
class Solution:
  def sumOfLeftLeaves(self, root: Optional[TreeNode]) -> int:
    def dfs(node, currentSum):
      if not node:
        return
      
      if node.left and not node.left.left and not node.left.right:
        currentSum += node.left.val
        
      if node.left:
        currentSum = dfs(node.left, currentSum)
        
      if node.right:
        currentSum = dfs(node.right, currentSum)
      
      return currentSum
        
    leftNodesSum = dfs(root, 0)
    return leftNodesSum
```