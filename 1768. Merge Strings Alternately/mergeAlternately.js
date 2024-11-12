/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeAlternately = (word1, word2) => {
  const merged = '';
  const len = Math.max(word1.length, word2.length);

  for (let i = 0; i < len; i++) {
    if (word1[i]) {
      merged +=word1[i];
    }

    if (word2[i]) {
      merged += word2[i];
    }
  }

  return merged;
};


const word1 = "abc";
const word2 = "pqr";
console.log('mergeAlternately: ', mergeAlternately(word1, word2)); // "apbqcr"
