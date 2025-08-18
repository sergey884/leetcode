// Definition for a binary tree node.
class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
    this.parent = null;
  }
}
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
const setParent = (node, parent) => {
  if (!node) {
    return;
  }

  node.parent = parent;
  setParent(node.left, node);
  setParent(node.right, node);
};

const distanceK = (root, target, k) => {
  const res = [];
  setParent(root, null);
  const visited = new Set();
  const dfs = (node, distance) => {
    if (!node || visited.has(node)) {
      return;
    }
    visited.add(node);
    if (distance === 0) {
      res.push(node.val);
      return;
    }

    dfs(node.parent, distance - 1);
    dfs(node.left, distance - 1);
    dfs(node.right, distance - 1);
  };

  dfs(target, k);
  return res;
};


const root = new TreeNode(3);
root.left = new TreeNode(5);
root.right = new TreeNode(1);

root.left.left = new TreeNode(6);
root.left.right = new TreeNode(2);

root.right.left = new TreeNode(0);
root.right.right = new TreeNode(8);

root.left.right.left = new TreeNode(7);
root.left.right.right = new TreeNode(4);

console.log('distanceK: ', distanceK(root, root.left, 2));
