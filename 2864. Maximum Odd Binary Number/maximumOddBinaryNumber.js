/**
 * @param {string} s
 * @return {string}
 */
const maximumOddBinaryNumber = (s) => {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '1') {
      count++;
    }
  }

  const res = '1'.repeat(count - 1) + '0'.repeat(s.length - count) + '1';

  return res;
};

const s = "0101"
console.log('maximumOddBinaryNumber: ', maximumOddBinaryNumber(s))
