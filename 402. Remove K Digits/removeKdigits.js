/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
const removeKdigits = (num, k) => {
  if (num.length === k) {
    return '0';
  }

  const stack = [];
  const res = [];

  for (let i = 0; i < num.length; i++) {
    while (k > 0 && stack.length && stack[stack.length - 1] > num[i]) {
      k--;
      stack.pop();
    }
    stack.push(num[i]);
  }
  console.log('res: ', stack, k, res);
  for (let i = 0; i < k; i++) {
    stack.pop();
  }

  for (let i = 0; i < stack.length; i++) {
    if (stack[i] === '0' && !res.length) {
      continue;
    }
    res.push(stack[i]);
  }

  return res ? res.join('') : '0';
};


const num = "10";
const k = 1;
console.log('removeKdigits: ', removeKdigits(num, k))
