/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
const customSortString = (order, s) => {
  let res = '';
  const count = Array(26).fill(0);

  const charA = 'a'.charCodeAt(0)

  for (let i = 0; i < s.length; i++) {
    let pos = s[i].charCodeAt(0) - charA;
    count[pos]++;
  }

  for (let i = 0; i < order.length; i++) {
    let pos = order[i].charCodeAt(0) - charA;
    while (count[pos] > 0) {
      res += order[i];
      count[pos]--;
    }
  }

  for (let i = 0; i < s.length; i++) {
    let pos = s[i].charCodeAt(0) - charA;
    if (count[pos] > 0) {
      res += s[i];
      count[pos]--;
    }
  }

  return res;
};

const order = "cba";
const s = "abcd";
console.log('customSortString: ', customSortString(order, s));
