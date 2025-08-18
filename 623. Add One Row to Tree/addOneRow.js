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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
const addOneRow = (root, val, depth) => {
  if (depth === 1) {
    const newNode = new TreeNode(val);
    newNode.left = root;
    return newNode;
  }

  const q = [[root, 1]];

  while (q.length) {
    const [node, currentDepth] = q.pop();
    if (currentDepth === depth - 1) {
      const newLeftNode = new TreeNode(val);
      const newRightNode = new TreeNode(val);

      const leftNode = node.left;
      const rightNode = node.right;

      node.left = newLeftNode;
      node.right = newRightNode;

      node.left.left = leftNode;
      node.right.right = rightNode;
    } else {
      if (node.left) {
        q.push([node.left, currentDepth + 1]);
      }

      if (node.right) {
        q.push([node.right, currentDepth + 1]);
      }
    }
  }

  return root;
};


const root = new TreeNode(4)
root.left = new TreeNode(2)
root.right = new TreeNode(6)

root.left.left = new TreeNode(3)
root.left.right = new TreeNode(1)

root.right.left = new TreeNode(5)

console.log('addOneRow: ', addOneRow(root, 1, 2))
