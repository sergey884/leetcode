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
 * @return {number[]}
 */
const rightSideView = (root) => {
  if (!root) {
    return null;
  }

  let nextLevelNodes = [root];
  const rightSideNodes = [];

  while (nextLevelNodes.length) {
    let currntLevelNodes = nextLevelNodes;
    nextLevelNodes = [];
    let node = null;

    while (currntLevelNodes.length) {
      node = currntLevelNodes.shift();

      if (node.left) {
        nextLevelNodes.push(node.left);
      }

      if (node.right) {
        nextLevelNodes.push(node.right);
      }
    }

    rightSideNodes.push(node.val);
  }

  return rightSideNodes;
};

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);

root.left.right = new TreeNode(5);
root.right.right = new TreeNode(4);

console.log("rightSideView: ", rightSideView(root));
