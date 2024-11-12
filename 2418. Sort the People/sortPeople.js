/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
const sortPeople = (names, heights) => {
  const heightsToNames = {};
  for (let i = 0; i < heights.length; i++) {
    heightsToNames[heights[i]] = names[i];
  }

  const res = [];
  heights.sort((a, b) => b - a);
  for (let i = 0; i < heights.length; i++) {
    res.push(heightsToNames[heights[i]]);
  }

  return res;
};


const names = ["Mary", "John", "Emma"];
const heights = [180, 165, 170];
console.log('sortPeople: ', sortPeople(names, heights))
