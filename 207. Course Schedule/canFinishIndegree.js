/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
const canFinish = (numCourses, prerequisites) => {
  const graph = {};
  const indegree = new Array(numCourses).fill(0);

  for (let i = 0; i < numCourses; i++) {
    graph[i] = [];
  }

  for (let i = 0; i < prerequisites.length; i++) {
    const [course, pre] = prerequisites[i];
    graph[course].push(pre);
    indegree[pre]++;
  }

  const queue = [];
  for (let i = 0; i < indegree.length; i++) {
    if (indegree[i] === 0) {
      queue.push(i);
    }
  }


  while (queue.length) {
    const pre = queue.shift();
    numCourses--;
    for (const course of graph[pre]) {
      indegree[course]--;
      if (indegree[course] === 0) {
        queue.push(course);
      }
    }
  }

  return numCourses === 0;
};