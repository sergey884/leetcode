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
const distributeCoins = (root) => {
  let moves = 0;
  const dfs = (node) => {
    if (!node) {
      return 0;
    }

    const leftCoins = dfs(node.left);
    const rightCoins = dfs(node.right);

    moves += Math.abs(leftCoins) + Math.abs(rightCoins);

    return node.val - 1 + leftCoins + rightCoins;
  };

  dfs(root);
  return moves;
};


const root = new TreeNode(0);
root.left = new TreeNode(0);
root.right = new TreeNode(2);

root.left.left = new TreeNode(4);
root.left.right = new TreeNode(0);

root.right.left = new TreeNode(1);
root.right.right = new TreeNode(0);

console.log('distributeCoins: ', distributeCoins(root)); // 6
