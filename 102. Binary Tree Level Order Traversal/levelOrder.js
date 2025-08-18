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
 * @return {number[][]}
 */
const levelOrder = (root) => {
  if (!root) {
    return [];
  }

  const queue = [root];
  const res = [];

  while (queue.length) {
    let currentLevel = [];
    let len = queue.length;

    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      currentLevel.push(node.val);

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }

    res.push(currentLevel);
  }

  return res;
};

const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);

root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

console.log('levelOrder: ', levelOrder(root))
