/**
 * @param {string} s
 * @return {number}
 */
const minAddToMakeValid = (s) => {
  const stack = [];
  let missedOpenParenhesis = 0;
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case "(":
        stack.push(s[i]);
        break;
      case ")":
        if (!stack.length) {
          missedOpenParenhesis++;
        } else {
          stack.pop();
        }
        break;
      default:
        break;
    }
  }

  return stack.length + missedOpenParenhesis;
};


const s = "())";
console.log("minAddToMakeValid: ", minAddToMakeValid(s));
