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
 * @return {boolean}
 */
const isValidBST = (root) => {
  const validate = (node, low = -Infinity, high = Infinity) => {
    if (!node) {
      return true;
    }

    if (node.val <= low || node.val >= high) {
      return false;
    }

    return validate(node.left, low, node.val) && validate(node.right, node.val, high);
  }

  return validate(root);
};


const root = new TreeNode(5);
root.left = new TreeNode(1);
root.right = new TreeNode(4);

root.right.left = new TreeNode(3);
root.right.right = new TreeNode(6);

console.log('isValidBST: ', isValidBST(root));
