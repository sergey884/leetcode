const wallsAndGates = (rooms) => {
  const ROWS = rooms.length;
  const COLS = rooms[0].length;

  const q = [];
  const visited = new Set();

  const adRoom = (r, c) => {
    if (r < 0 || r === ROWS || c < 0 || c === COLS || visited.has(`${r}-${c}`) || rooms[r][c] === -1) {
      return;
    }
    visited.add(`${r}-${c}`);
    q.push([r, c]);
  };

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (rooms[r][c] === 0) {
        q.push([r, c]);
        visited.add(`${r}-${c}`);
      }
    }
  }

  let dist = 0;
  while (q.length) {
    const currentLength = q.length;
    for (let i = 0; i < currentLength; i++) {
      const [r, c] = q.shift();
      rooms[r][c] = dist;
      adRoom(r + 1, c);
      adRoom(r - 1, c);
      adRoom(r, c - 1);
      adRoom(r, c + 1);
    }
    dist++;
  }
};

const grid = [
  [2147483647, -1, 0, 2147483647],
  [2147483647, 2147483647, 2147483647, -1],
  [2147483647, -1, 2147483647, -1],
  [0, -1, 2147483647, 2147483647]
];

console.log('wallsAndGates: ', wallsAndGates(grid));
