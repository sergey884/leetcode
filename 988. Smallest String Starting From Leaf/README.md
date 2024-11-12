# [988. Smallest String Starting From Leaf](https://leetcode.com/problems/smallest-string-starting-from-leaf/description/)

You are given the `root` of a binary tree where each node has a value in the range `[0, 25]` representing the letters `'a'` to `'z'`.

Return the **lexicographically smallest** string that starts at a leaf of this tree and ends at the root.

As a reminder, any shorter prefix of a string is **lexicographically smaller**.

- For example, `"ab"` is lexicographically smaller than `"aba"`.

A leaf of a node is a node that has no children.

### Example 1:
![](./images/tree1.png)
> Input: root = [0,1,2,3,4,3,4]
>
> Output: "dba"


### Example 2:
![](./images/tree2.png)
> Input: root = [25,1,3,1,3,0,2]
>
> Output: "adz"


### Example 3:
![](./images/tree3.png)
> Input: root = [2,2,1,null,1,0,null,0]
>
> Output: "abc"
 

### Constraints:
- The number of nodes in the tree is in the range `[1, 8500]`.
- `0 <= Node.val <= 25`


## Solutions

### Javascript
```javascript
const smallestFromLeaf = (root) => {
  let res = '~';
  const dfs = (node, path) => {
    if (!node) {
      return;
    }

    path.push(String.fromCharCode(97 + node.val));

    if (!node.left && !node.right) {
      const pathCopy = [...path];
      const pathStr = pathCopy.reverse().join('');
      res = pathStr < res ? pathStr : res;
    }

    if (node.left) {
      dfs(node.left, path);
    }

    if (node.right) {
      dfs(node.right, path);
    }

    path.pop();
  };

  dfs(root, []);

  return res;
};
```

### Python
```python
class Solution:
  def smallestFromLeaf(self, root: Optional[TreeNode]) -> str:
    res = '~'
    def dfs(node, path):
      nonlocal res
      if not node:
        return
      
      path.append(chr(97 + node.val))

      if not node.left and not node.right:
        pathStr = ''.join(reversed(path))
        res = min(res, pathStr)
        
      if node.left:
        dfs(node.left, path)
        
      if node.right:
        dfs(node.right, path)
        
      path.pop()
    
    dfs(root, [])
    return res
```