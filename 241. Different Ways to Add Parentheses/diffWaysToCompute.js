/**
 * @param {string} expression
 * @return {number[]}
 */
const diffWaysToCompute = (expression) => {
  const res = []
  const l = expression.length;

  if (l === 0) {
    return res;
  } 

  if (l === 1) {
    return [parseInt(expression)];
  }

  if (l === 2 && !isNaN(expression[0])) {
    return [parseInt(expression)];
  }

  for (let i = 0; i < l; i++) {
    const c = expression[i];
    if (!isNaN(c)) {
      continue;
    }

    const leftResult = diffWaysToCompute(expression.slice(0, i));
    const rightResult = diffWaysToCompute(expression.slice(i + 1));

    for (let left of leftResult) {
      for (let right of rightResult) {
        switch (c) {
          case '+':
            res.push(left + right);
            break;
          case '-':
            res.push(left - right);
            break;
          case '*':
            res.push(left * right);
            break;
        }
      }
    }
  }

  return res;
};


const expression = "2-1-1";
console.log('diffWaysToCompute: ', diffWaysToCompute(expression)); // [0, 2]
