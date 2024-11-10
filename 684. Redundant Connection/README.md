# [684. Redundant Connection](https://leetcode.com/problems/redundant-connection/description/)

In this problem, a tree is an **undirected graph** that is connected and has no cycles.

You are given a graph that started as a tree with `n` nodes labeled from `1` to `n`, with one additional edge added. The added edge has two **different** vertices chosen from 1 to n, and was not an edge that already existed. The graph is represented as an array edges of length n where `edges[i] = [`$a_i$, $b_i$`]` indicates that there is an edge between nodes $a_i$ and $b_i$ in the graph.

Return an edge that can be removed so that the resulting graph is a tree of `n` nodes. If there are multiple answers, return the answer that occurs last in the input.


### Example 1:
![](./images/reduntant1-1-graph.jpg)
> Input: edges = [[1,2],[1,3],[2,3]]
>
> Output: [2,3]


### Example 2:
![](./images/reduntant1-2-graph.jpg)
> Input: edges = [[1,2],[2,3],[3,4],[1,4],[1,5]]
>
> Output: [1,4]


### Constraints:
- `n == edges.length`
- `3 <= n <= 1000`
- `edges[i].length == 2`
- `1 <=` $a_i$ `<` $b_i$ `<= edges.length`
- $a_i$ != $b_i$
- There are no repeated edges.
- The given graph is connected.


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
      return False

    if self.rank[rootX] < self.rank[rootY]:
      self.id[rootX] = rootY
    elif self.rank[rootX] > self.rank[rootY]:
      self.id[rootY] = rootX
    else:
      self.id[rootX] = rootY
      self.rank[rootY] += 1
    
    return True

  def find(self, x: int) -> int:
    if self.id[x] != x:
      self.id[x] = self.find(self.id[x])
    return self.id[x]
  
class Solution:
  def findRedundantConnection(self, edges: List[List[int]]) -> List[int]:
    uf = UnionFind(len(edges) + 1)

    for u, v in  edges:
      if not uf.union(u, v):
        return [u, v]
```