/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
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


const numCourses = 4;
const prerequisites = [[1, 0], [2, 0], [3, 1], [3, 2]];
console.log('findOrder: ', findOrder(numCourses, prerequisites)); // [0, 1, 2, 3]
