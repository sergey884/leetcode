class UnionFind {
  constructor(n) {
    this.id = [];
    for (let i = 0; i < n; i++) {
      this.id[i]= i;
    }
    this.rank = Array(n).fill(1);
  }

  union(u, v) {
    const rootU = this.find(u);
    const rootV = this.find(v);

    if (rootU === rootV) {
      return;
    }

    if (this.rank[rootU] < this.rank[rootV]) {
      this.id[rootU] = rootV;
    } else if (this.rank[rootU] > this.rank[rootV]) {
      this.id[rootV] = rootU;
    } else {
      this.id[rootU] = rootV;
      this.rank[rootV]++;
    }
  }

  find(u) {
    if (this.id[u] !== u) {
      this.id[u] = this.find(this.id[u])
    }

    return this.id[u];
  }
}

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
const validPath = (n, edges, source, destination) => {
    const uf = new UnionFind(n);

    for (let i = 0; i < edges.length; i++) {
      const [u, v] = edges[i];
      uf.union(u, v);
    }

    return uf.find(source) === uf.find(destination);
};

// const n = 3;
// const edges = [[0, 1], [1, 2], [2, 0]];
// const source = 0;
// const destination = 2;

const n = 6;
const edges = [[0,1],[0,2],[3,5],[5,4],[4,3]];
const source = 0;
const destination = 5;

console.log('validPath: ', validPath(n, edges, source, destination));
