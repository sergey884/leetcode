# [513. Find Bottom Left Tree Value](https://leetcode.com/problems/find-bottom-left-tree-value)

Given the `root` of a binary tree, return the leftmost value in the last row of the tree.


### Example 1:
![](./images/tree1.jpg)
> Input: `root = [2,1,3]`
>
> Output: `1`


### Example 2:
![](./images/tree2.jpg)
> Input: `root = [1,2,3,4,null,5,6,null,null,7]`
>
> Output: `7`


### Constraints:
- The number of nodes in the tree is in the range `[1, 104]`.
- `-2^31 <= Node.val <= 2^31 - 1`


## Solutions

### Javascript
```javascript
const findBottomLeftValue = (root) => {
  const queue = [root];
  let node = null;

  while(queue.length) {
    node = queue.shift()

    if (node.right) {
      queue.push(node.right);
    }

    if (node.left) {
      queue.push(node.left);
    }
  }

  return node.val; 
};
```

### Python
```python
class Solution:
  def findBottomLeftValue(self, root: Optional[TreeNode]) -> int:
    queue = deque([root])

    while queue:
      node = queue.popleft()

      if node.right:
        queue.append(node.right)

      if node.left:
        queue.append(node.left)

    return node.val
```