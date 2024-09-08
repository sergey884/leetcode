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
 * @return {number[][]}
 */
const pathSum = (root, targetSum) => {
  const res = [];
  const dfs = (node, path, target) => {
    if (!node) {
      return;
    }
    path.push(node.val);
    target -= node.val;
    if (!node.left && !node.right && target === 0) {
      res.push([...path]);
    }

    dfs(node.left, path, target);
    dfs(node.right, path, target);

    path.pop();
  };
  dfs(root, [], targetSum);
  return res;
};


const root = new TreeNode(5);
root.left = new TreeNode(4);
root.right = new TreeNode(8);

root.left.left = new TreeNode(11);

root.left.left.left = new TreeNode(7);
root.left.left.right = new TreeNode(2);

root.right.left = new TreeNode(13);
root.right.right = new TreeNode(4);

root.right.right.left = new TreeNode(5);
root.right.right.right = new TreeNode(1);

console.log("pathSum: ", pathSum(root, 22)); // [[5, 4, 11, 2], [5, 8, 4, 5]]
