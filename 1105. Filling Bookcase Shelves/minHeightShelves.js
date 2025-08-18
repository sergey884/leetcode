/**
 * @param {number[][]} books
 * @param {number} shelfWidth
 * @return {number}
 */
const minHeightShelves = (books, shelfWidth) => {
  const cache = {};
  const helper = (i) => {
    if (i === books.length) {
      return 0;
    }

    if (cache[i]) {
      return cache[i];
    }

    let maxHeight = 0;
    let currWidth = shelfWidth;
    cache[i] = Infinity;

    for (let j = i; j < books.length; j++) {
      const [width, height] = books[j];
      if (currWidth < width) {
        break;
      }

      currWidth -= width;
      maxHeight = Math.max(maxHeight, height);
      cache[i] = Math.min(cache[i], helper(j + 1) + maxHeight);
    }

    return cache[i];
  }

  return helper(0);
};


const books = [[1,1], [2,3], [2,3], [1,1], [1,1], [1,1], [1,2]];
const shelfWidth = 4;
console.log('minHeightShelves: ', minHeightShelves(books, shelfWidth));
