// Definition for a binary tree node.
class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = (nums) => {
  const createTree = (left, right) => {
    if (left > right) {
      return null;
    }

    const mid = Math.round((left + right) / 2);
    const root = new TreeNode(nums[mid]);
    root.left = createTree(left, mid - 1);
    root.right = createTree(mid + 1, right);

    return root;
  };

  return createTree(0, nums.length - 1);
};


const nums = [-10, -3, 0, 5, 9];
console.log('sortedArrayToBST: ', sortedArrayToBST(nums));
