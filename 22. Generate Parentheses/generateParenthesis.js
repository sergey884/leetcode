/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = (n) => {
  const res = [];
  const backtracking = (leftCnt, rightCnt, currentStr) => {
    if (leftCnt === 0 && rightCnt === 0) {
      res.push(currentStr.join(''));
      return;
    }

    if (leftCnt > 0) {
      currentStr.push('(');
      backtracking(leftCnt - 1, rightCnt, currentStr);
      currentStr.pop();
    }

    if (leftCnt < rightCnt) {
      currentStr.push(')');
      backtracking(leftCnt, rightCnt - 1, currentStr);
      currentStr.pop();
    }
  };

  backtracking(n, n, []);
  return res;
};

const n = 3;
console.log('generateParenthesis: ', generateParenthesis(n)); // ["((()))","(()())","(())()","()(())","()()()"]