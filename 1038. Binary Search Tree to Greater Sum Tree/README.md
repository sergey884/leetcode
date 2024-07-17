# [1038. Binary Search Tree to Greater Sum Tree](https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/description/)

Given the `root` of a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to the original key plus the sum of all keys greater than the original key in BST.

As a reminder, a binary search tree is a tree that satisfies these constraints:

- The left subtree of a node contains only nodes with keys **less than** the node's key.
- The right subtree of a node contains only nodes with keys **greater than** the node's key.
- Both the left and right subtrees must also be binary search trees.


### Example 1:
![](./images/tree.png)
> Input: root = [4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]
>
> Output: [30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]


### Example 2:
> Input: root = [0,null,1]
>
> Output: [1,null,1]
 

### Constraints:
- The number of nodes in the tree is in the range `[1, 100]`.
- `0 <= Node.val <= 100`
- All the values in the tree are **unique**.


**Note:** This question is the same as 538: https://leetcode.com/problems/convert-bst-to-greater-tree/


## Solutions

### Performance

- **Time Complexity**: `O(n)`
- **Space Complexity**: `O(n) in the worst case, O(logn) in the average case`

### Javascript (Swaping algorithm)
```javascript
const bstToGst = (root) => {
  let sum = 0;
  const inOrderReverse = (node) => {
    if (!node) {
      return;
    }

    if (node.right) {
      inOrderReverse(node.right);
    }

    sum += node.val;
    node.val = sum;

    if (node.left) {
      inOrderReverse(node.left);
    }
  };

  inOrderReverse(root);
  return root;
};
```

### Performance

- **Time Complexity**: `O(n)`
- **Space Complexity**: `O(n) in the worst case, O(logn) in the average case`

### Python
```python
class Solution:
  def bstToGst(self, root: TreeNode) -> TreeNode:
    self.sum = 0
    def in_order_reverse(node):
      if not node:
        return
      
      if node.right:
        in_order_reverse(node.right)

      self.sum += node.val
      node.val = self.sum

      if node.left:
        in_order_reverse(node.left)

    in_order_reverse(root)
    return root
```