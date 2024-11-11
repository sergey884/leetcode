/**
 * @param {string[]} strings
 * @return {string[][]}
 */
const groupStrings = (strings) => {
  const group = {};
  const shiftLetter = (letter, shift) => {
    const chCode = (letter.charCodeAt(0) - shift + 26) % 26 + 'a'.charCodeAt(0);
    return chCode;
  }

  const getHash = (str) => {
    const shift = str.charCodeAt(0);
    const strCodes = [...str].map(it => shiftLetter(it, shift));
    return String.fromCharCode(...strCodes);
  }

  for (let i = 0; i < strings.length; i++) {
    const key = getHash(strings[i]);
    if (!group[key]) {
      group[key] = [];
    }
    group[key].push(strings[i])
  }

  return Object.values(group)
};


const strings = ["abc", "bcd", "acef", "xyz", "az", "ba", "a", "z"];
console.log('groupStrings: ', groupStrings(strings));
