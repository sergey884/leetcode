/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = (n, k) => {
  const ans = [];
  const dfs = (s, path) => {
    if (path.length === k) {
      ans.push([...path]);
      return;
    }

    for (let i = s; i <= n; i++) {
      path.push(i);
      dfs(i + 1, path);
      path.pop();
    }
  }

  dfs(1, []);
  return ans;
};


const n = 4;
const k = 2;
console.log('combine: ', combine(4, 2))
