/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const getMinimumDifference = (root) => {
  let prevNode = null;
  let maxDiff = Infinity;

  const inorderTraversal = (node) => {
    if (!node) {
      return;
    }

    inorderTraversal(node.left);

    if (prevNode) {
      const diff = Math.abs(prevNode.val - node.val);
      maxDiff = Math.min(maxDiff, diff);
    }
    prevNode = node;
  
    inorderTraversal(node.right);
  };

  inorderTraversal(root);
  return maxDiff;
};