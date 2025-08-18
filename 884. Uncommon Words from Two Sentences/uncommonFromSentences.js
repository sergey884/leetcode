/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
const uncommonFromSentences = (s1, s2) => {
  const words = [...s1.split(' '), ...s2.split(' ')];
  const wordsCount = {};

  for (const word of words) {
    wordsCount[word] = wordsCount[word] + 1 || 1;
  }

  return Object.keys(wordsCount).filter(word => wordsCount[word] === 1);
};

const s1 = "this apple is sweet";
const s2 = "this apple is sour";
console.log("uncommonFromSentences: ", uncommonFromSentences(s1, s2)); // ["sweet","sour"]
