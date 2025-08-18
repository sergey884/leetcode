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
const minDepth = (root) => {
  const dfs = (node) => {
    if (!node) {
      return 0;
    }

    if (!node.left) {
      return dfs(node.right) + 1;
    }

    if (!node.right) {
      return dfs(node.left) + 1;
    }

    return Math.min(dfs(node.left), dfs(node.right)) + 1; 
  }

  return dfs(root);
};


const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);

root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

console.log('minDepth: ', minDepth(root))
