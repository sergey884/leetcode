// Definition for a binary tree node.
class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const isAverageTree = (root) => {
  const postOrderTraversal = (node) => {
    if (!node) {
      return [true, 0, 0];
    }

    const [leftIsAverage, leftSum, leftCount] = postOrderTraversal(node.left);
    const [rightIsAverage, rightSum, rightCount] = postOrderTraversal(node.right);

    const childrenSum = leftSum + rightSum;
    const childrenCount = leftCount + rightCount;

    let isValid = leftIsAverage && rightIsAverage;
    if (childrenCount > 0) {
      isValid = isValid || (childrenSum / childrenCount === node.val);
    }

    return [isValid, childrenSum + node.val, childrenCount + 1];
  };

  return postOrderTraversal(root)[0];
};

// Test case 1: Valid tree where all nodes are average of their children
//         5
//        / \
//       2   2
//     /  \   \
//    1    3   2

const root = new TreeNode(5);

root.left = new TreeNode(2);
root.right = new TreeNode(2);

root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);

root.right.right = new TreeNode(2);

console.log(isAverageTree(root)); // Output should be true as all nodes are average of their children