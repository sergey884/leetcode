/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = (s) => {
  let i = s.length - 1;
  let lastWordLength = 0;

  while (s[i] === ' ') {
    i--;
  }

  while (i >= 0 && s[i] !== ' ') {
    lastWordLength++;
    i--;
  }

  return lastWordLength;
};

const s = "   fly me   to   the moon  ";
console.log('lengthOfLastWord: ', lengthOfLastWord(s));
