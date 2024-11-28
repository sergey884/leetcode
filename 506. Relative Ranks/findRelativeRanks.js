/**
 * @param {number[]} score
 * @return {string[]}
 */
const findRelativeRanks = (score) => {
  const arrCopy = [...score];
  arrCopy.sort((a, b) => b - a);
  const mapToRank = arrCopy.reduce((acc, item, index) => {
    acc[item] = index + 1;
    return acc;
  }, {});

  const rankToTitle = {
    "1": "Gold Medal",
    "2": "Silver Medal",
    "3": "Bronze Medal",
  };

  const res = [];
  for (let i = 0; i < score.length; i++) {
    if (rankToTitle[mapToRank[score[i]]]) {
      res.push('' + rankToTitle[mapToRank[score[i]]]);
    } else {
      res.push('' + mapToRank[score[i]]);
    }
  }

  return res;
};

const score = [10, 3, 8, 9, 4];
// Output: ["Gold Medal","5","Bronze Medal","Silver Medal","4"]
console.log('findRelativeRanks: ', findRelativeRanks(score));
