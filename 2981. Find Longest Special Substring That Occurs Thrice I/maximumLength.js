/**
 * @param {string} s
 * @return {number}
 */
const maximumLength = (s) => {
  const n = s.length;
  const counts = Array(26).fill(null).map(() => Array(n + 1).fill(0));
  let prevLetter = '@';
  let runningLength = 0;

  for (let i = 0; i < n; i++) {
    const letter = s[i];
    const letterIndex = letter.charCodeAt(0) - 'a'.charCodeAt(0)

    if (letter === prevLetter) {
        runningLength++;
    } else {
        runningLength = 1;
        prevLetter = letter;
    }
    counts[letterIndex][runningLength]++;
  }

  const getMaxFreq = (count) => {
    let times = 0;
    for (let i = n; i >= 0; i--) {
        times += count[i];
        if (times >= 3) {
            return i;
        }
    }

    return -1;
  };

  let maxFreq = -1;
  for (const count of counts) {
    maxFreq = Math.max(maxFreq, getMaxFreq(count));
  }

  return maxFreq;
};


const s = "abcaba";
console.log('maximumLength: ', maximumLength(s)); // 1