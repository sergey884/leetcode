/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
const countConsistentStrings = (allowed, words) => {
  let count = 0;
  const allowedChars = new Set(allowed);

  for (let i = 0; i < words.length; i++) {
    let isConsistent = true;
    for (let j = 0; j < words[i].length; j++) {
      if (!allowedChars.has(words[i][j])) {
        isConsistent = false;
        break;
      }
    }
    if (isConsistent) {
      count++;
    }
  }

  return count;
};


const allowed = "ab";
const words = ["ad","bd","aaab","baa","badab"];
console.log("countConsistentStrings: ", countConsistentStrings(allowed, words)); // 2
