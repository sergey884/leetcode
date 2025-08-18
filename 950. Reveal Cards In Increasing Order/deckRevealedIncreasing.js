/**
 * @param {number[]} deck
 * @return {number[]}
 */
const deckRevealedIncreasing = (deck) => {
  deck.sort((a, b) => a - b);
  const l = deck.length;
  const res = Array(l).fill(0);
  const q = [...Array(l).keys()];

  for (let i = 0; i < l; i++) {
    let index = q.shift();
    res[index] = deck[i];

    if (q.length) {
      q.push(q.shift());
    }
  }

  return res;
};

const deck = [17, 13, 11, 2, 3, 5, 7];
console.log('deckRevealedIncreasing: ', deckRevealedIncreasing(deck));
