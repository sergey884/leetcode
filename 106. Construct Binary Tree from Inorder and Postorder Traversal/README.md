# [106. Construct Binary Tree from Inorder and Postorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/description/)

Given two integer arrays `inorder` and `postorder` where `inorder` is the inorder traversal of a binary tree and `postorder` is the postorder traversal of the same tree, construct and return the binary tree.


### Example 1:
![](./images/tree.jpg)
> Input: inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
>
> Output: [3,9,20,null,null,15,7]


### Example 2:
> Input: inorder = [-1], postorder = [-1]
>
> Output: [-1]
 

### Constraints:
- `1 <= inorder.length <= 3000`
- `postorder.length == inorder.length`
- `-3000 <= inorder[i], postorder[i] <= 3000`
- `inorder` and `postorder` consist of **unique** values.
- Each value of `postorder` also appears in `inorder`.
- `inorder` is **guaranteed** to be the inorder traversal of the tree.
- `postorder` is **guaranteed** to be the postorder traversal of the tree.


## Solutions

### Performance

- **Time Complexity**: `O(n)`
- **Space Complexity**: `O(n)`

### Javascript
```javascript
const buildTree = (inorder, postorder) => {
  const inToIndex = {};
  for (let i = 0; i < inorder.length; i++) {
    inToIndex[inorder[i]] = i;
  }

  const build = (inStart, inEnd, posStart, posEnd) => {
    if (inStart > inEnd) {
      return null;
    }

    const rootVal = postorder[posEnd];
    const rootInIndex = inToIndex[rootVal];
    const leftSize = rootInIndex - inStart;

    const root = new TreeNode(rootVal);
    root.left = build(inStart, rootInIndex - 1, posStart, posStart + leftSize - 1);
    root.right = build(rootInIndex + 1, inEnd, posStart + leftSize, posEnd - 1);

    return root;
  }

  return build(0, inorder.length - 1, 0, postorder.length - 1);
};
```

### Performance

- **Time Complexity**: `O(n)`
- **Space Complexity**: `O(n)`

### Python
```python
class Solution:
  def buildTree(self, inorder: List[int], postorder: List[int]) -> Optional[TreeNode]:
    inToIndex = { num: i for i, num in enumerate(inorder) }
    
    def build(inStart, inEnd, posStart, posEnd):
      if inStart > inEnd:
        return None

      rootVal = postorder[posEnd]
      rootInIndex = inToIndex[rootVal]
      leftSize = rootInIndex - inStart
      
      root = TreeNode(rootVal)
      root.left = build(inStart, rootInIndex - 1, posStart, posStart + leftSize - 1)
      root.right = build(rootInIndex + 1, inEnd, posStart + leftSize, posEnd - 1)
      
      return root
    
    return build(0, len(inorder) - 1, 0, len(postorder) - 1)
```