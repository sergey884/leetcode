class UnionFind {
  constructor(n) {
    this.id = [];
    for (let i = 0; i < n; i++) {
      this.id[i] = i;
    }
    this.rank = Array(n).fill(0);
  }

  union(u, v) {
    const rootU = this.find(u);
    const rootV = this.find(v);

    if (rootU === rootV) {
      return false;
    }

    if(this.rank[rootU] < this.rank[rootV]) {
      this.id[rootU] = rootV;
    } else if(this.rank[rootU] > this.rank[rootV]) {
      this.id[rootV] = rootU;
    } else {
      this.id[rootU] = rootV;
      this.rank[rootV]++;
    }

    return true;
  }

  find(u) {
    if (this.id[u] !== u) {
      this.id[u] = this.find(this.id[u]);
    }

    return this.id[u];
  }
}
/**
 * @param {number[][]} edges
 * @return {number[]}
 */
const findRedundantConnection = (edges) => {
  const unionFind = new UnionFind(edges.length + 1);
  for (let edge of edges) {
    const [u, v] = edge;
    if (!unionFind.union(u, v)) {
      return edge;
    }
  }
};


const edges = [[1,2], [1,3], [2,3]];
console.log('findRedundantConnection: ', findRedundantConnection(edges)); // [2,3]
