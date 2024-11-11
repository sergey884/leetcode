# [98. Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/description/)

Given the `root` of a binary tree, determine if it is a valid binary search tree (BST).

A **valid BST** is defined as follows:

- The left subtree (A subtree of `treeName` is a tree consisting of a node in `treeName` and all of its descendants.) of a node contains only nodes with keys less than the node's key.
- The right subtree of a node contains only nodes with keys greater than the node's key.
- Both the left and right subtrees must also be binary search trees.


### Example 1:
![](./images/tree1.jpg)
> Input: root = [2,1,3]
>
> Output: true


### Example 2:
![](./images/tree2.jpg)
> Input: root = [5,1,4,null,null,3,6]
>
> Output: false
>
> Explanation: The root node's value is 5 but its right child's value is 4.
 

### Constraints:
- The number of nodes in the tree is in the range $[1, 10^{4}]$.
- $-2^{31} <= Node.val <= 2^{31} - 1$


## Solutions

### Performance

- **Time Complexity**: $O(n)$
- **Space Complexity**: $O(n)$

### Javascript
```javascript
 const isValidBST = (root) => {
  const validate = (node, low = -Infinity, high = Infinity) => {
    if (!node) {
      return true;
    }

    if (node.val <= low || node.val >= high) {
      return false;
    }

    return validate(node.left, low, node.val) && validate(node.right, node.val, high);
  }

  return validate(root);
};
```

### Performance

- **Time Complexity**: $O(n)$
- **Space Complexity**: $O(n)$

### Python
```python
class Solution:
  def isValidBST(self, root: Optional[TreeNode]) -> bool:
    def validate(node, low = float('-inf'), high = float('inf'),):
      if not node:
        return True
      
      if node.val <= low or node.val >= high:
        return False
      
      return validate(node.left, low, node.val) and validate(node.right, node.val, high)

    return validate(root)
```