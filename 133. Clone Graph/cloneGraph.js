// Definition for a _Node.
class Node {
  constructor(val = 0, neighbors = []) {
    this.val = val;
    this.neighbors = neighbors;
  }
}


/**
 * @param {_Node} node
 * @return {_Node}
 */
const cloneGraph = (node) => {
  if (!node) {
    return;
  }

  const oldToNew = new Map();
  const dfs = (node) => {
    if (oldToNew.has(node)) {
      return oldToNew.get(node);
    }

    const copy = new Node(node.val);
    oldToNew.set(node, copy);

    for (let i = 0; i < node.neighbors.length; i++) {
      copy.neighbors.push(dfs(node.neighbors[i]));
    }

    return copy;
  }

  return dfs(node);
};
