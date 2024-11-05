/**
 * @param {string} s
 * @return {number}
 */
const calculate = (s) => {
  const stack = [];
  let num = 0;
  let prevOperator = "+";

  for (let i = 0; i < s.length; i++) {
    if (!isNaN(s[i]) && s[i] !== " ") {
      num = num * 10 + parseInt(s[i]);
    }

    if ((isNaN(s[i]) && s[i] !== " ") || i === s.length - 1) {
      switch (prevOperator) {
        case "+":
          stack.push(num);
          break;
        case "-":
          stack.push(-num);
          break;
        case "*":
          stack.push(stack.pop() * num);
          break;
        case "/":
          stack.push(Math.trunc(stack.pop() / num));
          break;
        default:
          break;
      }
      num = 0;
      prevOperator = s[i];
    }
  }

  return stack.reduce((acc, cur) => acc + cur, 0);
};


// s = "3+2*2";
s = "3/2";
console.log("calculate", calculate(s)); // 7
