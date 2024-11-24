/**
 * @param {string} s
 * @return {number}
 */
const minAddToMakeValid = (s) => {
  const stack = [];
  let unmutchedOpenCount = 0;
  let unmutchedClosedCount = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      unmutchedClosedCount++;
    } else {
      if (unmutchedClosedCount === 0) {
        unmutchedOpenCount++;
      } else {
        unmutchedClosedCount--;
      }
    }
  }

  return unmutchedClosedCount + unmutchedOpenCount;
};


const s = "())";
console.log("minAddToMakeValid: ", minAddToMakeValid(s));
