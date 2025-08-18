/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
const findSubstring = (s, words) => {
  if (!s || !words || !words.length) {
    return [];
  }

  const wordlen = words[0].length;
  const wordslen = words.length;
  const windowLength = wordlen * wordslen;

  const wordCount = {};

  for(let i = 0; i < wordslen; i++) {
    if (!wordCount[words[i]]) {
      wordCount[words[i]] = 0;
    }

    wordCount[words[i]]++;
  }

  const res = [];

  for(let i = 0; i < s.length - windowLength + 1; i++) {
    let wordsCountInWindow = {}

    let j = i;
    while (j < i + windowLength) {
      let word = s.substring(j, j + wordlen);

      if (!wordCount[word]) {
        break;
      }

      if (!wordsCountInWindow[word]) {
        wordsCountInWindow[word] = 0;
      }

      wordsCountInWindow[word]++;

      if (wordsCountInWindow[word] > wordCount[word]) {
        break;
      }

      j += wordlen;
    }

    if (j === i + windowLength) {
      res.push(i);
    }
  }

  return res;
};

const s = "barfoothefoobarman";
const words = ["foo", "bar"];
console.log('findSubstring: ', findSubstring(s, words))
