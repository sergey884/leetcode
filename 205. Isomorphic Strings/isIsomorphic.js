/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = (s, t) => {
  const mapST = {};
  const mapTS = {};

  for (let i = 0; i < s.length; i++) {
    let charS = s[i];
    let charT = t[i];

    if ((mapST[charS] !== undefined && mapST[charS] !== charT) || 
        (mapTS[charT] !== undefined && mapTS[charT] !== charS)) {
      return false;
    }

    mapST[charS] = charT;
    mapTS[charT] = charS;
  }

  return true;
};


const s = "egg";
const t = "add";
console.log('isIsomorphic: ', isIsomorphic(s, t))
