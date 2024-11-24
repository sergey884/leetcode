// Definition for a binary tree node.
class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
/**
 * @param {string} s
 * @return {TreeNode}
 */
const str2tree = (s) => {
  if (!s || s.length === 0) {
    return null;
  }
  let rootVal = "";
  let i = 0;
  while (s[i] !== "(" && i < s.length) {
    rootVal += s[i];
    i++;
  }

  const rootNode = new TreeNode(parseInt(rootVal));
  const helper = (i) => {
    let start = i;
    let parenhesisCount = 1;
    while (parenhesisCount && i < s.length) {
      if (s[i] === "(") {
        parenhesisCount++;
      } else if (s[i] === ")") {
        parenhesisCount--;
      }
      i++;
    }

    return {
      start,
      end: i
    };
  }

  i++;
  const { start, end } = helper(i);
  let leftSubtree = s.slice(start, end - 1);
  rootNode.left = str2tree(leftSubtree);
  i = end;

  if (i < s.length && s[i] === "(") {
    i++;
    const { start, end } = helper(i);
    let rightSubtree = s.slice(start, end - 1);
    rootNode.right = str2tree(rightSubtree);
  }

  return rootNode;
};

const s = "4(2(3)(1))(6(5))";
console.log("str2tree: ", str2tree(s));
