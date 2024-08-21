/**
 * @param {string} s
 * @return {boolean}
 */
const checkPalindrome = (s, left, right) => {
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};

const validPalindrome = (s) => {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] != s[right]) {
      return checkPalindrome(s, left + 1, right) || checkPalindrome(s, left, right - 1);
    }
    left++;
    right--;
  }

  return true;
};


const s = "aba";
console.log(validPalindrome(s)); // true