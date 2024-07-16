# [124. Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/description/)

A **path** in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence **at most once**. Note that the path does not need to pass through the root.

The **path sum** of a path is the sum of the node's values in the path.

Given the `root` of a binary tree, return the maximum **path sum** of any **non-empty** path.


### Example 1:
![](./images/exx1.jpg)
> Input: root = [1,2,3]
>
> Output: 6
>
> Explanation: The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.


### Example 1:
![](./images/exx2.jpg)
> Input: root = [-10,9,20,null,null,15,7]
>
> Output: 42
>
> Explanation: The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42.
 

### Constraints:
- The number of nodes in the tree is in the range $[1, 3 * 10^{4}]$.
- `-1000 <= Node.val <= 1000`


## Solutions

### Performance

- **Time Complexity**: `O(n)`
- **Space Complexity**: `O(h)`
> `h - is the height of the tree`

### Javascript
```javascript
const maxPathSum = (root) => {
  let res = root.val;

  const dfs = (node) => {
    if (!node) {
      return 0;
    }

    const leftMax = Math.max(dfs(node.left), 0);
    const rightMax = Math.max(dfs(node.right), 0);

    res = Math.max(res, node.val + leftMax + rightMax);

    return node.val + Math.max(leftMax, rightMax);
  };

  dfs(root);
  return res;
};
```

### Performance

- **Time Complexity**: `O(n)`
- **Space Complexity**: `O(h)`
> `h - is the height of the tree`

### Python
```python
class Solution:
  def maxPathSum(self, root: Optional[TreeNode]) -> int:
    res = [root.val]
   
    def dfs(node):
      if not node:
        return 0
      
      leftMax = max(dfs(node.left), 0)
      rightMax = max(dfs(node.right), 0)
      
      res[0] = max(res[0], node.val + leftMax + rightMax)
      
      return node.val + max(leftMax, rightMax)
    
    dfs(root)
    return res[0]
```