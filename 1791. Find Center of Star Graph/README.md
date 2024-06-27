# [1791. Find Center of Star Graph](https://leetcode.com/problems/find-center-of-star-graph/description/)

There is an undirected **star** graph consisting of `n` nodes labeled from `1` to `n`. A star graph is a graph where there is one **center** node and **exactly** `n - 1` edges that connect the center node with every other node.

You are given a 2D integer array edges where each $edges[i] = [u_{i}, v_{i}]$ indicates that there is an edge between the nodes $u_{i}$ and $v_{i}$. Return the center of the given star graph.


### Example 1:
![](./images/star_graph.png)
> Input: edges = [[1,2],[2,3],[4,2]]
>
> Output: 2
>
> Explanation: As shown in the figure above, node 2 is connected to every other node, so 2 is the center.


### Example 2:
> Input: edges = [[1,2],[5,1],[1,3],[1,4]]
>
> Output: 1
 

### Constraints:
- $3 <= n <= 10^{5}$
- `edges.length == n - 1`
- `edges[i].length == 2`
- $1 <= u_{i}, v_{i} <= n$
- $u_{i} != v_{i}$
- The given `edges` represent a valid star graph.


## Solutions

### Performance

- **Time Complexity**: `O(1)`
- **Space Complexity**: `O(1)`

### Javascript
```javascript
const findCenter = (edges) => {
  if (edges[0][0] === edges[1][0] || edges[0][0] === edges[1][1]) {
    return edges[0][0];
  }

  return edges[0][1];
};
```

### Performance

- **Time Complexity**: `O(1)`
- **Space Complexity**: `O(1)`

### Python
```python
class Solution:
  def findCenter(self, edges: List[List[int]]) -> int:
    if edges[0][0] in edges[1]:
      return edges[0][0]
    return edges[0][1]
```