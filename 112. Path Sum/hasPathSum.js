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
 * @param {number} targetSum
 * @return {boolean}
 */
const hasPathSum = (root, targetSum) => {
  const dfs = (node, currentSum) => {
    if (!node) {
      return false;
    }

    currentSum += node.val;
    if (!node.left && !node.right) {
      return currentSum === targetSum;
    }

    return dfs(node.left, currentSum) || dfs(node.right, currentSum);
  }

  return  dfs(root, 0);
};

const root = new TreeNode(5);
root.left = new TreeNode(4);
root.right = new TreeNode(8);

root.left.left = new TreeNode(11);

root.left.left.left = new TreeNode(7);
root.left.left.right = new TreeNode(2);

root.right.left = new TreeNode(13);
root.right.right = new TreeNode(4);

root.right.right.right = new TreeNode(1);

console.log('hasPathSum: ', hasPathSum(root, 22));
