/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
  if (x < 0) {
    return false;
  }

  let reversed = 0;
  let original = x;

  while (x > 0) {
    const digit = x % 10;
    reversed = reversed * 10 + digit;
    x = Math.floor(x / 10);
  }

  return reversed === original;
};


const x = 121;
console.log('isPalindrome: ', isPalindrome(x)); // true
