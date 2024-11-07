// Definition for a _Node.
class _Node {
  constructor(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
};

/**
 * @param {_Node} root
 * @return {_Node}
 */
const treeToDoublyList = (root) => {
  if (!root) {
    return null;
  }
  let first = null;
  let last = null;
  const inOrderTraversal = (node) => {
    if (node) {
      inOrderTraversal(node.left);
      if (last) {
        last.right = node;
        node.left = last;
      } else {
        first = node;
      }
      last = node;
      inOrderTraversal(node.right);
    }
  };

  inOrderTraversal(root);
  last.right = first;
  first.left = last;

  return first;
};


const root = new _Node(4);
root.left = new _Node(2);
root.right = new _Node(5);

root.left.left = new _Node(1);
root.left.right = new _Node(3);

console.log('treeToDoublyList: ', treeToDoublyList(root));
