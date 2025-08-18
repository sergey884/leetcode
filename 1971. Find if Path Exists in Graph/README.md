# [1971. Find if Path Exists in Graph](https://leetcode.com/problems/find-if-path-exists-in-graph/description/)

There is a **bi-directional** graph with `n` vertices, where each vertex is labeled from `0` to `n - 1` (**inclusive**). The edges in the graph are represented as a 2D integer array `edges`, where each `edges[i] = [`$u_i$`,` $v_i$`]` denotes a bi-directional edge between vertex $u_i$ and vertex $v_i$. Every vertex pair is connected by **at most one** edge, and no vertex has an edge to itself.

You want to determine if there is a valid path that exists from vertex `source` to vertex `destination`.

Given `edges` and the integers `n`, `source`, and `destination`, return `true` if there is a **valid path** from `source` to `destination`, or `false` otherwise.


### Example 1:
![](./images/validpath-ex1.png)
> Input: n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2
>
> Output: true
>
> Explanation: There are two paths from vertex 0 to vertex 2:
>
> - 0 → 1 → 2
>
> - 0 → 2


### Example 2:
![](./images/validpath-ex2.png)
> Input: n = 6, edges = [[0,1],[0,2],[3,5],[5,4],[4,3]], source = 0, destination = 5
>
> Output: false
>
> Explanation: There is no path from vertex 0 to vertex 5.
 

### Constraints:
- `1 <= n <= 2 *` $10^5$
- `0 <= edges.length <= 2 *` $10^5$
- `edges[i].length == 2`
- `0 <=` $u_i$, $v_i$ `<= n - 1`
- $u_i$ `!=` $v_i$
- `0 <= source, destination <= n - 1`
- There are no duplicate edges.
- There are no self edges.


## Solutions

### Performance

- **Time Complexity**: $O(n)$
- **Space Complexity**: $O(n)$

### Javascript
```javascript
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
```

### Performance

- **Time Complexity**: $O(n)$
- **Space Complexity**: $O(n)$

### Python
```python
class UnionFind:
  def __init__(self, n: int) -> None:
    self.id = [i for i in range(n)]
    self.rank = [0] * n

  def union(self, x: int, y: int) -> None:
    rootX = self.find(x)
    rootY = self.find(y)

    if rootX == rootY:
      return

    if self.rank[rootX] < self.rank[rootY]:
      self.id[rootX] = rootY
    elif self.rank[rootX] > self.rank[rootY]:
      self.id[rootY] = rootX
    else:
      self.id[rootX] = rootY
      self.rank[rootY] += 1

  def find(self, x: int) -> int:
    if self.id[x] != x:
      self.id[x] = self.find(self.id[x])
    return self.id[x]


class Solution:
  def validPath(self, n: int, edges: List[List[int]], source: int, destination: int) -> bool:
    uf = UnionFind(n)

    for u, v in edges:
      uf.union(u, v)

    return uf.find(source) == uf.find(destination)
```