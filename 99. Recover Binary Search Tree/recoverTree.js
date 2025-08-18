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
 * @return {void} Do not return anything, modify root in-place instead.
 */
const recoverTree = (root) => {
  let prev = null;
  let first = null;
  let second = null;

  const inorder = (node) => {
    if (!node) {
      return;
    }

    inorder(node.left);

    if (prev && prev.val > node.val) {
      if (!first) {
        first = prev;
      }
      second = node;
    }
    prev = node;

    inorder(node.right);
  }

  inorder(root);

  [first.val, second.val] = [second.val, first.val]

  return root;
};

const root = new TreeNode(1)
root.left = new TreeNode(3)
root.left.right = new TreeNode(2)

console.log('recoverTree: ', recoverTree(root))
