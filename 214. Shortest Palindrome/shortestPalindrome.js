/**
 * @param {string} s
 * @return {string}
 */
const shortestPalindrome = (s) => {
  const l = s.length;
  const reversedString = s.split('').reverse().join('');

  for (let i = 0; i < l; i++) {
    if (s.substring(0, l - i) === reversedString.substring(i)) {
      return reversedString.substring(0, i) + s;
    }
  }

  return '';
};

const s = "abcbabcab";
console.log('shortestPalindrome: ', shortestPalindrome(s)); // "bacbabcbabcab"
