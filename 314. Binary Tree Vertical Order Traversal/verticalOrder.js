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
const verticalOrder = (root) => {
  if (!root) {
    return [];
  }

  const queue = [[root, 0]];
  const nodesByColumn = {};
  const res = [];
  let maxColumn = 0;
  let minColumn = 0;

  while (queue.length) {
    const [node, column] = queue.shift();
    maxColumn = Math.max(maxColumn, column);
    minColumn = Math.min(minColumn, column);

    if (!nodesByColumn[column]) {
      nodesByColumn[column] = [];
    }

    nodesByColumn[column].push(node.val)

    if (node.left) {
      queue.push([node.left, column - 1]);
    }

    if (node.right) {
      queue.push([node.right, column + 1]);
    }
  }

  for (let i = minColumn; i <= maxColumn; i++) {
    res.push(nodesByColumn[i]);
  }

  return res;
};


// const root = new TreeNode(3);
// root.left = new TreeNode(9);
// root.right = new TreeNode(20);

// root.right.left = new TreeNode(15);
// root.right.right = new TreeNode(7);

const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(8);

root.left.left = new TreeNode(4);
root.left.right = new TreeNode(0);

root.right.left = new TreeNode(1);
root.right.right = new TreeNode(7);

console.log('verticalOrder: ', verticalOrder(root));
