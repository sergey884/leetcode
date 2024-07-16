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
const maxPathSum = (root) => {
  let res = root.val;

  const dfs = (node) => {
    if (!node) {
      return 0;
    }

    const leftMax = Math.max(dfs(node.left), 0);
    const rightMax = Math.max(dfs(node.right), 0);

    res = Math.max(res, node.val + leftMax + rightMax);

    return node.val + Math.max(leftMax, rightMax);
  };

  dfs(root);
  return res;
};


const root = new TreeNode(-10);
root.left = new TreeNode(9);
root.right = new TreeNode(20);

root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

console.log('maxPathSum: ', maxPathSum(root));
