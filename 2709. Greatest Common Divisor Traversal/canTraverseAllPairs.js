
class UnionFind {
  constructor(n) {
    this.parent = [];
    for (let i = 0; i < n; i++) {
      this.parent.push(i);
    }
    this.sizes = Array(n).fill(1);
    this.count = n;
  }

  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }

    return self.parent[x];
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX === rootY) {
      return;
    }

    if (this.sizes[rootX] < this.sizes[rootY]) {
      this.parent[rootX] = rootY;
      this.sizes[rootY] += this.sizes[rootX];
    } else {
      this.parent[rootY] = rootX;
      this.sizes[rootX] += this.sizes[rootY];
    }
    this.count--;
  }
}

/**
 * @parentam {number[]} nums
 * @return {boolean}
 */
const canTraverseAllPairs = (nums) => {

};