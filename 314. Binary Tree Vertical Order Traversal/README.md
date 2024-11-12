# [314. Binary Tree Vertical Order Traversal](https://leetcode.com/problems/binary-tree-vertical-order-traversal/description/)

Given the root of a binary tree, return **the vertical order traversal** of its nodes' values. (i.e., from top to bottom, column by column).

If two nodes are in the same row and column, the order should be from **left to right**.


### Example 1:
![](./images/vtree1.jpg)
> Input: root = [3,9,20,null,null,15,7]
>
> Output: [[9],[3,15],[20],[7]]


### Example 2:
![](./images/vtree2.jpg)
> Input: root = [3,9,8,4,0,1,7]
>
> Output: [[4],[9],[3,0,1],[8],[7]]


### Example 3:
![](./images/vtree2-1.jpg)
> Input: root = [3,9,8,4,0,1,7,null,null,null,2,5]
>
> Output: [[4],[9,5],[3,0,1],[8,2],[7]]
 

### Constraints:
- The number of nodes in the tree is in the range `[0, 100]`.
- `-100 <= Node.val <= 100`


## Solutions

### Performance

- **Time Complexity**: $O(n)$
- **Space Complexity**: $O(n)$

### Javascript
```javascript
const verticalOrder = (root) => {
  if (!root) {
    return [];
  }

  const queue = [[root, 0]];
  const nodesByColumn = {};
  const res = [];
  let maxColumn = 0;
  let minColumn = 0;

  while (queue.length) {
    const [node, column] = queue.shift();
    maxColumn = Math.max(maxColumn, column);
    minColumn = Math.min(minColumn, column);

    if (!nodesByColumn[column]) {
      nodesByColumn[column] = [];
    }

    nodesByColumn[column].push(node.val)

    if (node.left) {
      queue.push([node.left, column - 1]);
    }

    if (node.right) {
      queue.push([node.right, column + 1]);
    }
  }

  for (let i = minColumn; i <= maxColumn; i++) {
    res.push(nodesByColumn[i]);
  }

  return res;
};
```

### Performance

- **Time Complexity**: $O(n)$
- **Space Complexity**: $O(n)$

### Python
```python
class Solution:
  def verticalOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
    if not root:
      return []

    q = deque([(root, 0)])
    cols = {}
    res = []
    maxColumn = 0
    minColumn = 0
    
    while q:
      node, column = q.popleft()
      maxColumn = max(maxColumn, column)
      minColumn = min(minColumn, column)

      if column not in cols:
        cols[column] = []
      cols[column].append(node.val)
      
      if node.left:
        q.append((node.left, column - 1))
        
      if node.right:
        q.append((node.right, column + 1))
        
    for i in range(minColumn, maxColumn + 1):
      res.append(cols[i])

    return res
```