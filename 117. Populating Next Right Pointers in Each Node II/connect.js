// Definition for a _Node.
class _Node {
  constructor(val = null, left = null, right = null, next = null) {
    this.val = val;
    this.left = left;
    this.right = right;
    this.next = next;
  }
};

/**
 * @param {_Node} root
 * @return {_Node}
 */
const connect = (root) => {
  if (!root) {
    return root;
  }

  const queue = [root];

  while (queue.length) {
    let queueSize = queue.length;

    for (let i = 0; i < queueSize; i++) {
      const node = queue.shift();

      if (i < queueSize - 1) {
        node.next = queue[0];
      } else {
        node.next = null;
      }

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }
  }

  return root;
};


const root = new _Node(1);
root.left = new _Node(2);
root.right = new _Node(3);

root.left.left = new _Node(4);
root.left.right = new _Node(5);

root.right.right = new _Node(7);

console.log('connect: ', connect(root));
