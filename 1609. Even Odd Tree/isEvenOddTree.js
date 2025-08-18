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
 * @return {boolean}
 */
const isEvenOddTree = (root) => {
  let even = true;
  const q = [root];

  while (q.length) {
    let prev = even ? -Infinity : Infinity;
    const len = q.length;
    for (let i = 0; i < len; i++) {
      const node = q.shift();
      if (even && (node.val % 2 === 0 || node.val <= prev)) {
        return false;
      }

      if (!even && (node.val % 2 === 1 || node.val >= prev)) {
        return false;
      }

      if (node.left) {
        q.push(node.left);
      }

      if (node.right) {
        q.push(node.right);
      }

      prev = node.val;
    }
    even = !even;
  }

  return true;
};


const root = new TreeNode(1)
root.left = new TreeNode(10)
root.right = new TreeNode(4)

root.left.left = new TreeNode(3)

root.left.left.left = new TreeNode(12)
root.left.left.right = new TreeNode(8)

root.right.left = new TreeNode(7)
root.right.right = new TreeNode(9)

root.right.left.left = new TreeNode(6)
root.right.right.right = new TreeNode(2)

console.log('isEvenOddTree: ', isEvenOddTree(root))
