# [199. Binary Tree Right Side View](https://leetcode.com/problems/binary-tree-right-side-view/description/)

Given the `root` of a binary tree, imagine yourself standing on the **right side** of it, return the values of the nodes you can see ordered from top to bottom.


### Example 1:
![](./images/tree.jpg)
> Input: root = [1,2,3,null,5,null,4]
>
> Output: [1,3,4]


### Example 2:
> Input: root = [1,null,3]
> Output: [1,3]


### Example 3:
> Input: root = []
>
> Output: []
 

### Constraints:
- The number of nodes in the tree is in the range `[0, 100]`.
- $-100 <= Node.val <= 100$


## Solutions

### Performance

- **Time Complexity**: $O(n)$
- **Space Complexity**: $O(n)$

### Javascript
```javascript
const rightSideView = (root) => {
  if (!root) {
    return null;
  }

  let nextLevelNodes = [root];
  const rightSideNodes = [];

  while (nextLevelNodes.length) {
    let currntLevelNodes = nextLevelNodes;
    nextLevelNodes = [];
    let node = null;

    while (currntLevelNodes.length) {
      node = currntLevelNodes.shift();

      if (node.left) {
        nextLevelNodes.push(node.left);
      }

      if (node.right) {
        nextLevelNodes.push(node.right);
      }
    }

    rightSideNodes.push(node.val);
  }

  return rightSideNodes;
};
```

### Performance

- **Time Complexity**: $O(n)$
- **Space Complexity**: $O(n)$

### Python
```python
class Solution:
  def rightSideView(self, root: Optional[TreeNode]) -> List[int]:
    if not root:
      return []

    nextLevel = deque([root])
    rightSideNodes = []

    while nextLevel:
      currLevel = nextLevel
      nextLevel = deque()

      while currLevel:
        node = currLevel.popleft()

        if node.left:
          nextLevel.append(node.left)


        if node.right:
          nextLevel.append(node.right)
        
      rightSideNodes.append(node.val)

    return rightSideNodess
```