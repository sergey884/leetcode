# [100. Same Tree](https://leetcode.com/problems/same-tree/description/)

Given the roots of two binary trees `p` and `q`, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.


### Example 1:
![](./images/ex1.jpg)
> Input: `p = [1,2,3], q = [1,2,3]`
>
> Output: `true`

### Example 2:
![](./images/ex2.jpg)
> Input: `p = [1,2], q = [1,null,2]`
>
> Output: `false`

### Example 3:
![](./images/ex3.jpg)
> Input: `p = [1,2,1], q = [1,1,2]`
>
> Output: `false`


### Constraints:
- The number of nodes in both trees is in the range `[0, 100]`.
- `-10^4 <= Node.val <= 10^4`


## Solutions

### Javascript
```javascript
const isSameTree = (p, q) => {
  if (!p && !q) {
    return true;
  }

  if (!p || !q) {
    return false;
  }

  if (p.val !== q.val) {
    return false;
  }

  return (
    isSameTree(p.left, q.left) &&
    isSameTree(p.right, q.right)
  )
};
```

### Python
```python
class Solution:
  def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
    if not p and not q:
      return True
      
    if not p or not q:
      return False
      
    if p.val != q.val:
      return False
      
    return (self.isSameTree(p.left, q.left) and
      self.isSameTree(p.right, q.right))
```