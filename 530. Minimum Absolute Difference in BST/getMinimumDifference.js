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
const getMinimumDifference = (root) => {
  let prev = null;
  let minDiff = Infinity;

  const inorderTraversal = (node) => {
    if (!node) {
      return;
    }

    inorderTraversal(node.left);

    if (prev) {
      const diff = Math.abs(node.val - prev.val);
      minDiff = Math.min(minDiff, diff);
    }

    prev = node;

    inorderTraversal(node.right);
  }

  inorderTraversal(root);
  return minDiff;
};


const root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(6);

root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
      
console.log('getMinimumDifference: ', getMinimumDifference(root));
