# [450. Delete Node in a BST](https://leetcode.com/problems/delete-node-in-a-bst/description/)

Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the **root node reference** (possibly updated) of the BST.

Basically, the deletion can be divided into two stages:

1. Search for a node to remove.
2. If the node is found, delete the node.


### Example 1:
![](./images/del_node_1.jpg)
> Input: root = [5,3,6,2,4,null,7], key = 3
>
> Output: [5,4,6,2,null,null,7]
>
> Explanation: Given key to delete is 3. So we find the node with value 3 and delete it.
>
> One valid answer is [5,4,6,2,null,null,7], shown in the above BST.
>
> Please notice that another valid answer is [5,2,6,null,4,null,7] and it's also accepted.
![](./images/del_node_supp.jpg)


### Example 2:
> Input: root = [5,3,6,2,4,null,7], key = 0
>
> Output: [5,3,6,2,4,null,7]
>
> Explanation: The tree does not contain a node with value = 0.


### Example 3:
> Input: root = [], key = 0
>
> Output: []
 

### Constraints:
- The number of nodes in the tree is in the range $[0, 10^{4}]$.
- $-10^{5} <= Node.val <= 10^{5}$
- Each node has a **unique** value.
- `root` is a valid binary search tree.
- $-10^{5} <= key <= 10^{5}$
 

**Follow up:** Could you solve it with time complexity `O(height of tree)`?


## Solutions

### Performance

- **Time Complexity**: $O(h), which is O(logn) for a balanced BST and O(n) in the worst case (unbalanced BST)$
- **Space Complexity**: $O(h), which is O(logn) for a balanced BST and O(n) in the worst case (unbalanced BST)$

### Javascript
```javascript
const deleteNode = (root, key) => {
  const successor = (nodeElement) => {
    let node = nodeElement.right;
    while (node.left) {
      node = node.left;
    }
    return node.val;
  };

  const predecessor = (nodeElement) => {
    let node = nodeElement.left;
    while (node.right) {
      node = node.right;
    }
    return node.val;
  }

  if (!root) {
    return null;
  }

  if (key > root.val) {
    root.right = deleteNode(root.right, key);
  } else if (key < root.val) {
    root.left = deleteNode(root.left, key);
  } else {
    if (!root.left && !root.right) {
      root = null;
    } else if (root.right) {
      root.val = successor(root);
      root.right = deleteNode(root.right, root.val);
    } else {
      root.val = predecessor(root);
      root.left = deleteNode(root.left, root.val);
    }
  }

  return root;
};
```

### Performance

- **Time Complexity**: $O(h), which is O(logn) for a balanced BST and O(n) in the worst case (unbalanced BST)$
- **Space Complexity**: $O(h), which is O(logn) for a balanced BST and O(n) in the worst case (unbalanced BST)$

### Python
```python
class Solution:
  def successor(self, node: Optional[TreeNode]) -> int:
    node = node.right
    while node.left:
      node = node.left
    return node.val
  
  def predecessor(self, node: Optional[TreeNode]) -> int:
    node = node.left
    while node.right:
      node = node.right
    return node.val

  def deleteNode(self, root: Optional[TreeNode], key: int) -> Optional[TreeNode]:
    if not root:
      return None
    
    if key > root.val:
      root.right = self.deleteNode(root.right, key)
    elif key < root.val:
      root.left = self.deleteNode(root.left, key)
    else:
      if not (root.left or root.right):
        root = None
      elif root.right:
        root.val = self.successor(root)
        root.right = self.deleteNode(root.right, root.val)
      else:
        root.val = self.predecessor(root)
        root.left = self.deleteNode(root.left, root.val)
    
    return root
```