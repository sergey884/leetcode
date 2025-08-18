/**
 * @param {string[]} words
 * @param {character[]} letters
 * @param {number[]} score
 * @return {number}
 */
const maxScoreWords = (words, letters, score) => {
  const lettersCnt = {};
  for (let i = 0; i < letters.length; i++) {
    const c = letters[i];
    if (!lettersCnt[c]) {
      lettersCnt[c] = 0;
    }
    lettersCnt[c]++;
  }

  const canFormWord = (word, lettersCnt) => {
    const wordCnt = {};
    for (let i = 0; i < word.length; i++) {
      const c = word[i];
      if (!wordCnt[c]) {
        wordCnt[c] = 0;
      }
      wordCnt[c]++;
    }

    for (let j = 0; j < word.length; j++) {
      const c = word[j];
      if (wordCnt[c] > (lettersCnt[c] || 0)) {
        return false;
      }
    }

    return true;
  };

  const getScore = (word) => {
    let res = 0;
    let charA = "a".charCodeAt(0);
    for (let i = 0; i < word.length; i++) {
      const c = word[i]
      const charCode = c.charCodeAt(0);
      const index = charCode - charA;
      
      res += score[index];
    }

    return res;
  }

  const backtracking = (i) => {
    if (i === words.length) {
      return 0;
    }
    // skip the word
    let res = backtracking(i + 1);

    if (canFormWord(words[i], lettersCnt)) {
      for (let j = 0; j < words[i].length; j++) {
        const c = words[i][j];
        lettersCnt[c]--;
      }

      res = Math.max(res, getScore(words[i]) + backtracking(i + 1));

      for (let j = 0; j < words[i].length; j++) {
        const c = words[i][j];
        lettersCnt[c]++;
      }
    }
    
    return res;
  }

  return backtracking(0);
};


const words = ["dog", "cat", "dad", "good"];
const letters = ["a", "a", "c", "d", "d", "d", "g", "o", "o"];
const score = [1, 0, 9, 5, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

console.log('maxScoreWords: ', maxScoreWords(words, letters, score))
