/**
 * @param {string} s
 * @return {number}
 */
const minimumLength = (s) => {
  let left = 0;
  let right = s.length - 1;

  while (left < right && s[left] === s[right]) {
    while (left + 1 < right && s[left] == s[left + 1]) {
      left++;
    }

    while (left < right - 1 && s[right] == s[right - 1]) {
      right--;
    }

    left++;
    right--;
  }

  return right - left + 1;
};

const s = "cabaabac";
// const s = "ca";
// const s = "aabccabba";
console.log('minimumLength: ', minimumLength(s));
