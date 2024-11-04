/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
const minDistance = (word1, word2) => {
  const M = word1.length;
  const N = word2.length;
  const memo = Array(M).fill(null).map(() => Array(N).fill(null));

  const minDistanceRecursion = (word1, word2, word1Index, word2Index) => {
    if (word1Index === word1.length) {
      return word2.length - word2Index; 
    }

    if (word2Index === word2.length) {
      return word1.length - word1Index;
    }

    if (memo[word1Index][word2Index] !== null) {
      return memo[word1Index][word2Index];
    }

    if (word1[word1Index] === word2[word2Index]) {
      return minDistanceRecursion(word1, word2, word1Index + 1, word2Index + 1);
    }

    const insert = 1 + minDistanceRecursion(word1, word2, word1Index, word2Index + 1);
    const remove = 1 + minDistanceRecursion(word1, word2, word1Index + 1, word2Index);
    const replace = 1 + minDistanceRecursion(word1, word2, word1Index + 1, word2Index + 1);
    const minEditDistance = Math.min(insert, remove, replace);
    memo[word1Index][word2Index] = minEditDistance;

    return minEditDistance;
  }

  return minDistanceRecursion(word1, word2, 0, 0);
};


const word1 = "horse";
const word2 = "ros";
console.log("minDistance: ", minDistance(word1, word2)); // 3