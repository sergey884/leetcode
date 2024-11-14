class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const upsideDownBinaryTree = (root) => {
  if (!root || !root.left) {
    return root;
  }

  let leftChild = root.left;
  let rightChild = root.right;

  let newRoot = upsideDownBinaryTree(leftChild);

  leftChild.right = root;
  leftChild.left = rightChild;
  root.left = null;
  root.right = null;

  return newRoot;
};

const root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)

root.left.left = new TreeNode(4)
root.left.right = new TreeNode(5)

console.log('upsideDownBinaryTree: ', upsideDownBinaryTree(root));
