# [102. Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/description/)

Given the `root` of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).


### Example 1:
![](./images/tree1.jpg)
> Input: `root = [3,9,20,null,null,15,7]`
> Output: `[[3],[9,20],[15,7]]`


### Example 2:
> Input: `root = [1]`
> Output: `[[1]]`


### Example 3:
> Input: `root = []`
> Output: `[]`


### Constraints:
- The number of nodes in the tree is in the range `[0, 2000]`.
- `-1000 <= Node.val <= 1000`


## Solutions

### Javascript
```javascript
const levelOrder = (root) => {
  if (!root) {
    return [];
  }

  const queue = [root];
  const res = [];

  while (queue.length) {
    let currentLevel = [];
    let len = queue.length;

    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      currentLevel.push(node.val);

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }

    res.push(currentLevel);
  }

  return res;
};
```

### Python
```python
class Solution:
  def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
    if not root:
      return []
    
    queue = deque([root])
    res = []

    while queue:
      currentLevel = []
      l = len(queue)

      for i in range(l):
        node = queue.popleft()
        currentLevel.append(node.val)

        if node.left:
          queue.append(node.left)

        if node.right:
          queue.append(node.right)
      
      res.append(currentLevel)

    return res
```