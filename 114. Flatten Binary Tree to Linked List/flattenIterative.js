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
 * @return {void} Do not return anything, modify root in-place instead.
 */
const flatten = (root) => {
  if (!root) {
    return;
  }

  const stack = [root];

  while (stack.length) {
    const node = stack.pop();
    if (node.right) {
      stack.push(node.right);
    }
    if (node.left) {
      stack.push(node.left);
    }
    if (stack.length) {
      node.right = stack[stack.length - 1];
    }
    node.left = null;
  }
};


const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(5);

root.left.left = new TreeNode(3);
root.left.right = new TreeNode(4);

root.right.right = new TreeNode(6);

console.log('flatten: ', flatten(root));
