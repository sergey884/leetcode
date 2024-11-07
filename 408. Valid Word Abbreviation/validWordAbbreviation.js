/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
const validWordAbbreviation = (word, abbr) => {
  let i = 0;
  let j = 0;
  while (i < word.length && j < abbr.length) {
    if (!isNaN(abbr[j])) {
      if (abbr[j] === '0') {
        return false;
      }

      let num = 0;
      while (j < abbr.length && !isNaN(abbr[j])) {
        num = num * 10 + parseInt(abbr[j]);
        j++;
      }
      i += num;
    } else {
      if (word[i] !== abbr[j]) {
        return false;
      }
      i++;
      j++;
    }
  }

  return i === word.length && j === abbr.length;
};

const word = "internationalization";
const abbr = "i12iz4n";
console.log("validWordAbbreviation: ", validWordAbbreviation(word, abbr)); // true
