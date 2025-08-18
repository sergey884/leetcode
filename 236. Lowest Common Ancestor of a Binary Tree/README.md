# [236. Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/description/)

Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the [definition of LCA on Wikipedia](https://en.wikipedia.org/wiki/Lowest_common_ancestor): “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow **a node to be a descendant of itself**).”


### Example 1:
![](./images/binarytree.png)
> Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
>
> Output: 3
>
> Explanation: The LCA of nodes 5 and 1 is 3.


### Example 2:
![](./images/binarytree%20(1).png)
> Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
>
> Output: 5
>
> Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.


### Example 3:
> Input: root = [1,2], p = 1, q = 2
>
> Output: 1
 

### Constraints:
- The number of nodes in the tree is in the range $[2, 10^{5}]$.
- $-10^{9} <= Node.val <= 10^{9}$
- All `Node.val` are **unique**.
- `p != q`
- `p` and `q` will exist in the tree.


## Solutions

### Performance

- **Time Complexity**: `O(h)`
- **Space Complexity**: `O(h)`

### Javascript
```javascript
const lowestCommonAncestor = (root, p, q) => {
  if (!root || root === p || root === q) {
    return root;
  }

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  if (left && right) {
    return root;
  }

  return left || right;
};
```

### Performance

- **Time Complexity**: `O(h)`
- **Space Complexity**: `O(h)`

### Python
```python
class Solution:
  def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
    if not root or root == p or root == q:
      return root
    
    left = self.lowestCommonAncestor(root.left, p, q)
    right = self.lowestCommonAncestor(root.right, p, q)

    if left and right:
      return root
    
    return left or right
```