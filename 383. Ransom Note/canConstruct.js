/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = (ransomNote, magazine) => {
  const magazineCharCnt = {};
  for (let i = 0; i < magazine.length; i++) {
    if (!magazineCharCnt[magazine[i]]) {
      magazineCharCnt[magazine[i]] = 0;
    }
    magazineCharCnt[magazine[i]]++;
  }

  for (let i = 0; i < ransomNote.length; i++) {
    if (!magazineCharCnt[ransomNote[i]] || magazineCharCnt[ransomNote[i]] === 0) {
      return false;
    }
    magazineCharCnt[ransomNote[i]]--;
  }

  return true;
};


const ransomNote = "a";
const magazine = "b";
console.log('canConstruct: ', canConstruct(ransomNote, magazine));
