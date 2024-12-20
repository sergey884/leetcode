# [863. All Nodes Distance K in Binary Tree](https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/description)

Given the `root` of a binary tree, the value of a target node `target`, and an integer `k`, return an array of the values of all nodes that have a distance `k` from the target node.

You can return the answer in any order.


### Example 2:
![](./images/oranges.png)
> Input: root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, k = 2
>
> Output: [7,4,1]
>
> Explanation: The nodes that are a distance 2 from the target node (with value 5) have values 7, 4, and 1.


### Example 2:
> Input: root = [1], target = 1, k = 3
>
> Output: []
 

### Constraints:
- The number of nodes in the tree is in the range `[1, 500]`.
- `0 <= Node.val <= 500`
- All the values `Node.val` are unique.
- `target` is the value of one of the nodes in the tree.
- `0 <= k <= 1000`


## Solutions

### Performance

- **Time Complexity**: $O(n)$
- **Space Complexity**: $$O(n)$

### Javascript
```javascript
const setParent = (node, parent) => {
  if (!node) {
    return;
  }

  node.parent = parent;
  setParent(node.left, node);
  setParent(node.right, node);
};

const distanceK = (root, target, k) => {
  const res = [];
  setParent(root, null);
  const visited = new Set();
  const dfs = (node, distance) => {
    if (!node || visited.has(node)) {
      return;
    }
    visited.add(node);
    if (distance === 0) {
      res.push(node.val);
      return;
    }

    dfs(node.parent, distance - 1);
    dfs(node.left, distance - 1);
    dfs(node.right, distance - 1);
  };

  dfs(target, k);
  return res;
};
```

### Performance

- **Time Complexity**: $O(n)$
- **Space Complexity**: $O(n)$

### Python
```python

```