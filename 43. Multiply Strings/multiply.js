/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const multiply = (num1, num2) => {
  if (num1 === '0' || num2 === '0') {
    return '0';
  }

  let res = new Array(num1.length + num2.length).fill(0);
  const num1Reverse = num1.split('').reverse();
  const num2Reverse = num2.split('').reverse();

  for (let i = 0; i < num1Reverse.length; i++) {
    for (let j = 0; j < num2Reverse.length; j++) {
      const product = num1Reverse[i] * num2Reverse[j];
      res[i + j] += product;
      res[i + j + 1] += Math.floor(res[i + j] / 10);
      res[i + j] %= 10;
    }
  }

  res = res.reverse();
  let begin = 0;
  while (res[begin] === 0) {
    begin++;
  }

  return res.slice(begin).join('');
};