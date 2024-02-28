// Definition for a binary tree node.
class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTree = (p, q) => {
  if (!p && !q) {
    return true;
  }

  if (!p || !q) {
    return false;
  }

  if (p.val !== q.val) {
    return false;
  }

  return (
    isSameTree(p.left, q.left) &&
    isSameTree(p.right, q.right)
  )
};

// p = [1, 2, 3], q = [1, 2, 3]
const pTree = new TreeNode(1);
pTree.left = new TreeNode(2);
pTree.right = new TreeNode(3);

const qTree = new TreeNode(1);
qTree.left = new TreeNode(2);
qTree.right = new TreeNode(3);

console.log('qTree: ', isSameTree(pTree, qTree));