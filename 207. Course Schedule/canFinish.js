/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
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


const numCourses = 2;
const prerequisites = [[1,0]];
console.log('canFinish: ', canFinish(numCourses, prerequisites))
