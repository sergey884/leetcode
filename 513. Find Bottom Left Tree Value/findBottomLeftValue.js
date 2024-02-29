
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
const findBottomLeftValue = (root) => {
  const queue = [root];
  let node = null;

  while(queue.length) {
    node = queue.shift()

    if (node.right) {
      queue.push(node.right);
    }

    if (node.left) {
      queue.push(node.left);
    }
  }

  return node.val; 
};

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);

root.left.left = new TreeNode(4);

root.right.left = new TreeNode(5);
root.right.right = new TreeNode(6);

root.right.left.left = new TreeNode(7);

console.log('findBottomLeftValue: ', findBottomLeftValue(root));