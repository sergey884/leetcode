/**
 * @param {string} s
 * @return {number}
 */
const maximumLength = (s) => {
  const n = s.length;
  let prevLetter = '';
  let runningLength = 0;
  const substringLengths = Array(26).fill(null).map(() => Array(3).fill(-1));

  for (let i = 0; i < n; i++) {
    const letter = s[i];
    const letterIndex = letter.charCodeAt(0) - 'a'.charCodeAt(0)

    if (letter === prevLetter) {
      runningLength++;
    } else {
      runningLength = 1;
      prevLetter = letter;
    }

    const minLength = Math.min(...substringLengths[letterIndex])
    if (runningLength > minLength) {
      const minIndex = substringLengths[letterIndex].indexOf(minLength);
      substringLengths[letterIndex][minIndex] = runningLength;
    }
  }

  let maxFreq = -1;
  for (let i = 0; i < 26; i++) {
    maxFreq = Math.max(maxFreq, Math.min(...substringLengths[i]));
  }

  return maxFreq;
};

const s = "abcaba";
console.log('maximumLength: ', maximumLength(s)); // 1