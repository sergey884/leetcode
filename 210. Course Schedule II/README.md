# [210. Course Schedule II](https://leetcode.com/problems/course-schedule-ii/description/)

There are a total of `numCourses` courses you have to take, labeled from `0` to `numCourses - 1`. You are given an array prerequisites where $prerequisites[i] = [a_i, b_i]$ indicates that you **must** take course $b_i$ first if you want to take course $a_i$.

- For example, the pair `[0, 1]`, indicates that to take course `0` you have to first take course `1`.

Return the ordering of courses you should take to finish all courses. If there are many valid answers, return **any** of them. If it is impossible to finish all courses, return **an empty array**.

 
### Example 1:
> Input: numCourses = 2, prerequisites = [[1,0]]
>
> Output: [0,1]
>
> Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1].


### Example 2:
> Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
>
> Output: [0,2,1,3]
>
> Explanation: There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.
>
> So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].


### Example 3:
> Input: numCourses = 1, prerequisites = []
>
> Output: [0]


### Constraints:
- `1 <= numCourses <= 2000`
- `0 <= prerequisites.length <= numCourses * (numCourses - 1)`
- `prerequisites[i].length == 2`
- $0 <= a_{i}, b_{i} < numCourses$
- $a_{i} != b_{i}$
- All the pairs $[a_{i}, b_{i}]$ are distinct.


## Solutions

### Performance

- **Time Complexity**: $O(V + E)$
- **Space Complexity**: $O(V + E)$

### Javascript
```javascript
const findOrder = (numCourses, prerequisites) => {
  const graph = {};
  const inDegree = {};

  for (let i = 0; i < numCourses; i++) {
    graph[i] = [];
    inDegree[i] = 0;
  }

  for (let i = 0; i < prerequisites.length; i++) {
    const [dest, src] = prerequisites[i];
    graph[src].push(dest);
    inDegree[dest]++;
  }

  const queue = Object.keys(inDegree).filter(item => inDegree[item] === 0);

  const res = [];
  while (queue.length) {
    const node = queue.shift()
    res.push(parseInt(node));
    const neighbors = graph[node];

    for (let i = 0; i < neighbors.length; i++) {
      inDegree[neighbors[i]]--;
      if (inDegree[neighbors[i]] === 0) {
        queue.push(neighbors[i]);
      }
    }
  }

  return res.length === numCourses ? res : [];
};
```

### Performance

- **Time Complexity**: $O(V + E)$
- **Space Complexity**: $O(V + E)$

### Python
```python
class Solution:
  def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
    graph = { i: [] for i in range(numCourses) } 
    indegree = { i: 0 for i in range(numCourses) }
    
    for dest, src in prerequisites:
      graph[src].append(dest)
      indegree[dest] += 1
      
    queue = deque([i for i in indegree if indegree[i] == 0])
    
    res = []
    while queue:
      node = queue.popleft()
      res.append(node)
      for neighbor in graph[node]:
        indegree[neighbor] -= 1
        if indegree[neighbor] == 0:
          queue.append(neighbor)
          
    return res if len(res) == numCourses else []
```