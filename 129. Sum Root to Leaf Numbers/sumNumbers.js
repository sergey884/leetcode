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
const sumNumbers = (root) => {
  let res = 0;
  const dfs = (node, curr) => {
    if (!node) {
      return;
    }

    let num = 10 * curr + node.val;
    if (!node.left && !node.right) {
      res += num;
    }

    if (node.left) {
      dfs(node.left, num);
    }

    if (node.right) {
      dfs(node.right, num);
    }
  };
  
  dfs(root, 0);
  return res;
};


const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);

console.log('sumNumbers: ', sumNumbers(root));
