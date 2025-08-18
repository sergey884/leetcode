# [207. Course Schedule](https://leetcode.com/problems/course-schedule/description/)

There are a total of `numCourses` courses you have to take, labeled from `0` to `numCourses - 1`. You are given an array `prerequisites` where `prerequisites[i] = [`$a_i$, $b_i$`]` indicates that you must take course $b_i$ first if you want to take course $a_i$.

- For example, the pair `[0, 1]`, indicates that to take course `0` you have to first take course `1`.

Return `true` if you can finish all courses. Otherwise, return `false`.

 
### Example 1:
> Input: numCourses = 2, prerequisites = [[1,0]]
>
> Output: true
>
> Explanation: There are a total of 2 courses to take. 
>
> To take course 1 you should have finished course 0. So it is possible.


### Example 2:
> Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
>
> Output: false
>
> Explanation: There are a total of 2 courses to take. 
>
> To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.
 

### Constraints:
- `1 <= numCourses <= 2000`
- `0 <= prerequisites.length <= 5000`
- `prerequisites[i].length == 2`
- `0 <=` $a_i$, $b_i$ `< numCourses`
- All the pairs `prerequisites[i]` are **unique**.


## Solutions

### Javascript
```javascript
const canFinish = (numCourses, prerequisites) => {
  const preMap = {};
  for (let i = 0; i < numCourses; i++) {
    if (!preMap[i]) {
      preMap[i] = [];
    }
  }

  for (let i = 0; i < prerequisites.length; i++) {
    const [crs, pre] = prerequisites[i];
    preMap[crs].push(pre);
  }

  const visited = new Set();
  const dfs = (crs) => {
    if (visited.has(crs)) {
      return false;
    }

    if (preMap[crs].length === 0) {
      return true;
    }

    visited.add(crs);
    for (let i = 0; i < preMap[crs].length; i++) {
      if (!dfs(preMap[crs][i])) {
        return false;
      }
    }
    visited.delete(crs);
    preMap[crs] = []
    return true;
  }

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) {
      return false;
    }
  }

  return true;
};
```

### Python
```python
class Solution:
  def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
    preMap = { i: [] for i in range(numCourses) }
    for crs, pre in prerequisites:
      preMap[crs].append(pre)
    
    visited = set()
    def dfs(crs):
      if crs in visited:
        return False
      
      if preMap[crs] == []:
        return True
      
      visited.add(crs)
      for pre in preMap[crs]:
        if not dfs(pre):
          return False
      visited.remove(crs)
      preMap[crs] = []
      return True
    
    for crs in range(numCourses):
      if not dfs(crs):
          return False

    return True
```