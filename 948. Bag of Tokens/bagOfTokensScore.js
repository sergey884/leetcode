/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
const bagOfTokensScore = (tokens, power) => {
  tokens.sort((a, b) => a - b);
  let left = 0;
  let right = tokens.length - 1;
  let score = 0;
  let maxScore = 0;

  while (left <= right) {
    if (power >= tokens[left]) {
      power -= tokens[left];
      score++;
      maxScore = Math.max(maxScore, score);
      left++;
    } else if (score > 0) {
      power += tokens[right];
      score--;
      right--;
    } else {
      break;
    }
  }
  
  return maxScore;
};

const tokens = [200,100];
const power = 150;
console.log('bagOfTokensScore: ', bagOfTokensScore(tokens, power));
