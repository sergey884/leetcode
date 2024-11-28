/**
 * @param {string[]} words
 * @return {string[]}
 */
const getCharCount = (str) => {
  const ctarCnt = {};
  for (let i = 0; i < str.length; i++) {
    if (!ctarCnt[str[i]]) {
      ctarCnt[str[i]] = 0;
    }
    ctarCnt[str[i]]++;
  }

  return ctarCnt;
};

const commonChars = (words) => {
    const ctarCnt = getCharCount(words[0]);

    for (let i = 1; i < words.length; i++) {
      const wordCtarCnt = getCharCount(words[i]);
      for (let key in ctarCnt) {
        ctarCnt[key] = Math.min(ctarCnt[key], wordCtarCnt[key] || 0);
      }
    }

    const res = [];
    for (let key in ctarCnt) {
      for (let i = 0; i < ctarCnt[key]; i++) {
        res.push(key);
      }
    }

    return res;
};

const words = ["bella", "label", "roller"];
console.log('commonChars: ', commonChars(words));
