// Definition for a binary tree node.
class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
 }
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
const buildTree = (inorder, postorder) => {
  const inToIndex = {};
  for (let i = 0; i < inorder.length; i++) {
    inToIndex[inorder[i]] = i;
  }

  const build = (inStart, inEnd, posStart, posEnd) => {
    if (inStart > inEnd) {
      return null;
    }

    const rootVal = postorder[posEnd];
    const rootInIndex = inToIndex[rootVal];
    const leftSize = rootInIndex - inStart;

    const root = new TreeNode(rootVal);
    root.left = build(inStart, rootInIndex - 1, posStart, posStart + leftSize - 1);
    root.right = build(rootInIndex + 1, inEnd, posStart + leftSize, posEnd - 1);

    return root;
  }

  return build(0, inorder.length - 1, 0, postorder.length - 1);
};


const inorder = [9, 3, 15, 20, 7];
const postorder = [9, 15, 7, 20, 3];
console.log("buildTree: ", buildTree(inorder, postorder))
