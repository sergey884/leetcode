/**
 * @param {string} s
 * @return {number}
 */
const calculate = (s) => {
  const stack = [];
  let operand = 0;
  let res = 0;
  let sign = 1;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (!isNaN(char) && char !== ' ') {
      operand = operand * 10 + parseInt(char);
    } else if (char === '+') {
      res += sign * operand;
      sign = 1;
      operand = 0;
    } else if (char === '-') {
      res += sign * operand;
      sign = -1;
      operand = 0;
    } else if (char === '(') {
      stack.push(res);
      stack.push(sign);
      sign = 1;
      res = 0;
    } else if (char === ')') {
      res += sign * operand;
      res *= stack.pop();
      res += stack.pop();
      operand = 0;
    }
  }

  return res + (sign * operand);
};

// "(1+(4+5+2)-3)+(6+8)"