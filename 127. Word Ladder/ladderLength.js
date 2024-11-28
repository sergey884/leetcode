/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
const ladderLength = (beginWord, endWord, wordList) => {
  const neibors = {};
  wordList.push(beginWord);

  for (let i = 0; i < wordList.length; i++) {
    const word = wordList[i];
    for (let j = 0; j < word.length; j++) {
      const key = word.slice(0, j) + '*' + word.slice(j + 1);
      if (!neibors[key]) {
        neibors[key] = [];
      }
      neibors[key].push(word);
    }
  }

  const queue = [[beginWord, 1]];
  const visited = new Set();

  while (queue.length) {
    const [word, level] = queue.pop();
    for (let i = 0; i < word.length; i++) {
      const key = word.slice(0, i) + '*' + word.slice(i + 1);
      const wordNeibors = neibors[key];
      for (let j = 0; j < wordNeibors.length; j++) {
        if (wordNeibors[j] === endWord) {
          return level + 1;
        }
        if (!visited.has(wordNeibors[j])) {
          visited.add(wordNeibors[j]);
          queue.push([wordNeibors[j], level + 1]);
        }
      }
    }
  }

  return 0;
};

const beginWord = 'hit';
const endWord = 'cog';
const wordList = ['hot', 'dot', 'dog', 'lot', 'log', 'cog'];
console.log("ladderLength: ", ladderLength(beginWord, endWord, wordList)); // 5