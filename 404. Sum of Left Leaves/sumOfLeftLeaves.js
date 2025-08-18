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
const sumOfLeftLeaves = (root) => {
  const dfs = (node, currentSum) => {
    if (!node) {
      return;
    }

    if (node.left && !node.left.left && !node.left.right) {
      currentSum += node.left.val;
    }

    if (node.left) {
      currentSum = dfs(node.left, currentSum);
    }

    if (node.right) {
      currentSum = dfs(node.right, currentSum);
    }

    return currentSum;
  };

  const leftNodesSum = dfs(root, 0);
  return leftNodesSum;
};

const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);

root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

console.log('sumOfLeftLeaves: ', sumOfLeftLeaves(root));
