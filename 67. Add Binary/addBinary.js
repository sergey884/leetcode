/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = (a, b) => {
  let carry = 0;
  let res = '';

  let i = a.length - 1;
  let j = b.length - 1;

  while (i >= 0 || j >= 0) {
    const aBit = i >= 0 ? parseInt(a[i]) : 0;
    const bBit = j >= 0 ? parseInt(b[j]) : 0;
    const sum = aBit + bBit + carry;
    carry = Math.floor(sum / 2);
    res = (sum % 2) + res;
    i--;
    j--;
  }

  return carry ?  carry + res : res;
};

const a = '11';
const b = '1';
console.log(addBinary(a, b)); // '100'