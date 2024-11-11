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
 * @return {string}
 */
const smallestFromLeaf = (root) => {
  let res = '~';
  const dfs = (node, path) => {
    if (!node) {
      return;
    }

    path.push(String.fromCharCode(97 + node.val));

    if (!node.left && !node.right) {
      const pathCopy = [...path];
      const pathStr = pathCopy.reverse().join('');
      res = pathStr < res ? pathStr : res;
    }

    if (node.left) {
      dfs(node.left, path);
    }

    if (node.right) {
      dfs(node.right, path);
    }

    path.pop();
  };

  dfs(root, []);

  return res;
};

const root = new TreeNode(0);
root.left = new TreeNode(1);
root.right = new TreeNode(2);

root.left.left = new TreeNode(3);
root.left.right = new TreeNode(4);

root.right.left = new TreeNode(3);
root.right.right = new TreeNode(4);

console.log('smallestFromLeaf: ', smallestFromLeaf(root));
