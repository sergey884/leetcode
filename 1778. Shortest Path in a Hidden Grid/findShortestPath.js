/**
 * // This is the GridMaster's API interface.
 * // You should not implement it, or speculate about its implementation
 * function GridMaster() {
 *
 *     @param {character} direction
 *     @return {boolean}
 *     this.canMove = function(direction) {
 *         ...
 *     };
 *     @param {character} direction
 *     @return {void}
 *     this.move = function(direction) {
 *         ...
 *     };
 *     @return {boolean}
 *     this.isTarget = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {GridMaster} master
 * @return {integer}
 */
const findShortestPath = (master) => {
  const directions = {
    'U': [-1, 0], 
    'D': [1, 0], 
    'L': [0, -1], 
    'R': [0, 1],
  };
  const oppositeDirections = {
    'U': 'D',
    'D': 'U',
    'L': 'R',
    'R': 'L',
  };

  const visited = new Set();
  let target = null;

  const dfs = (x, y) => {
    if (master.isTarget()) {
      target = [x, y];
    }

    const visitedKey = `${x}-${y}`;
    visited.add(visitedKey);

    for (const direction in directions) {
      const [dx, dy] = directions[direction];
      const newX = x + dx;
      const newY = y + dy;
      const newKey = `${newX}-${newY}`;

      if (!visited.has(newKey) && master.canMove(direction)) {
        master.move(direction);
        dfs(newX, newY);
        master.move(oppositeDirections[direction]);
      }
    }
  };

  dfs(0, 0);

  if (target === null) {
    return -1;
  }

  const queue = [[0, 0, 0]];
  visited.delete('0-0');

  while (queue.length) {
    const [x, y, steps] = queue.shift();

    if (x === target[0] && y === target[1]) {
      return steps;
    }

    for (const direction in directions) {
      const [dx, dy] = directions[direction];
      const newX = x + dx;
      const newY = y + dy;
      const newKey = `${newX}-${newY}`;

      if (visited.has(newKey)) {
        visited.delete(newKey)
        queue.push([newX, newY, steps + 1]);
      }
    }
  }
};