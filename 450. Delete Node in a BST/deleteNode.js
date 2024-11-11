// Definition for a binary tree node.
class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
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


const root = new TreeNode(5);
root.left = new TreeNode(3);
root.right = new TreeNode(6);

root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);

root.right.right = new TreeNode(7);

console.log('deleteNode: ', deleteNode(root, 3)); // [5, 4, 6, 2, null, null, 7]
