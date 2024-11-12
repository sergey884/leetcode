/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {
  let left = 0;
  let right = s.length - 1;
  const isAlphaNumeric = (char) => {
    return /[a-zA-Z0-9]/.test(char);
  };

  while (left < right) {
    if (!isAlphaNumeric(s[left])) {
      left++;
      continue;
    }

    if (!isAlphaNumeric(s[right])) {
      right--;
      continue;
    }

    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};


const s = "A man, a plan, a canal: Panama";
console.log('isPalindrome: ', isPalindrome(s)); // true
