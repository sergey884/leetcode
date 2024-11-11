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
 * @return {TreeNode}
 */
const bstToGst = (root) => {
  let sum = 0;
  const inOrderReverse = (node) => {
    if (!node) {
      return;
    }

    if (node.right) {
      inOrderReverse(node.right);
    }

    sum += node.val;
    node.val = sum;

    if (node.left) {
      inOrderReverse(node.left);
    }
  };

  inOrderReverse(root);
  return root;
};


const root = new TreeNode(4);
root.left = new TreeNode(1);
root.right = new TreeNode(6);

root.left.left = new TreeNode(0);
root.left.right = new TreeNode(2);

root.left.right.right = new TreeNode(3);

root.right.left = new TreeNode(5);
root.right.right = new TreeNode(7);

root.right.right.right = new TreeNode(8);

console.log('bstToGst: ', bstToGst(root))
