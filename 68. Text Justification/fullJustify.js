/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
const fullJustify = (words, maxWidth) => {
  const res = [];
  let line = [];
  let lineLength = 0;
  let i = 0;

  while (i < words.length) {
    if (lineLength + line.length + words[i].length > maxWidth) {
      const extraSpaces = maxWidth - lineLength;
      const spaces = Math.floor(extraSpaces /  Math.max(1, line.length - 1));
      let reminderSpaces = extraSpaces % Math.max(1, line.length - 1)

      for (let j = 0; j < Math.max(1, line.length - 1); j++) {
        line[j] += " ".repeat(spaces)
        if (reminderSpaces) {
          line[j] += " ";
          reminderSpaces--;
        }
      }

      res.push(line.join(''));
      line = [];
      lineLength = 0;
    }

    line.push(words[i]);
    lineLength += words[i].length;
    i++;
  }

  const lastLine = line.join(' ');
  const trailingSpaces = maxWidth - lastLine.length;
  res.push(lastLine + " ".repeat(trailingSpaces));

  return res;
};


const words = ["This", "is", "an", "example", "of", "text", "justification."];
const maxWidth = 16;
console.log('fullJustify: ', fullJustify(words, maxWidth));
