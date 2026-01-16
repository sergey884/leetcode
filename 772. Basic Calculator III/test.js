const calculate = (s) => {
  const stack = [];
  let num = 0;
  let operator = '+';

  const helper = (num, operator) => {
    switch (operator) {
      case '+':
        stack.push(num);
        break;
      case '-':
        stack.push(-num);
        break;
      case '*':
        stack.push(stack.pop() * num);
        break;
      case '/':
        stack.push(Math.trunc(stack.pop() / num));
        break;
      default:
        break;
    }
  };

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (!isNaN(char) && char !== ' ') {
      num = num * 10 + parseInt(char);
    } else if (char === '(') {
      stack.push(operator);
      stack.push('(');
      operator = '+';
      num = 0;
    } else if (char === ')') {
      helper(num, operator);
      num = 0;

      let subTotal = 0;
      while (stack[stack.length - 1] !== '(') {
        subTotal += stack.pop();
      }
      stack.pop(); // Remove '('
      operator = stack.pop(); // Get the operator before '('
      helper(subTotal, operator);
    } else if (char === '+' || char === '-' || char === '*' || char === '/') {
      helper(num, operator);
      operator = char;
      num = 0;
    }
  }

  helper(num, operator);
  return stack.reduce((acc, curr) => acc + curr, 0);
};