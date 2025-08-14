/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isCompleteTree = (root) => {
  const q = [root];

  let foundNull = false;
  while (q.length) {
    const node = q.shift();
    if (!node) {
      foundNull = true;
    } else {
      if (foundNull) {
        return false;
      }
      q.push(node.left);
      q.push(node.right);
    }
  }

  return true;
}