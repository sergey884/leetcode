/**
 * @param {string} s
 * @return {string}
 */
const maximumOddBinaryNumber = (s) => {
  let left = 0;
  let str = s.split('');

  for (let i = 0; i < str.length; i++) {
    if (s[i] === '1') {
      [str[i], str[left]] = [str[left], str[i]]
      left++;
    }
  }

  [str[left - 1], str[str.length - 1]] = [str[str.length - 1], str[left - 1]]

  return str.join('');
};

const s = "0101"
console.log('maximumOddBinaryNumber: ', maximumOddBinaryNumber(s))