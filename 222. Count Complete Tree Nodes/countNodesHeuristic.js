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
 * @return {number}
 */
const countNodes = (root) => {
  if (!root) {
    return 0;
  }

  let left = root;
  let right = root;
  let leftDepth = 0;
  let rightDepth = 0;

  while (left) {
    leftDepth++;
    left = left.left
  }

  while (left) {
    rightDepth++;
    right = right.right
  }

  if (leftDepth === rightDepth) {
    return Math.pow(2, leftDepth) - 1;
  }

  return 1 + countNodes(root.left) + countNodes(root.right);
};

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);

root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

root.right.left = new TreeNode(6);

console.log('countNodes: ', countNodes(root));
