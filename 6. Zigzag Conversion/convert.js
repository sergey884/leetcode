/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = (s, numRows) => {
  if (numRows === 1 || numRows >= s.length) {
    return s;
  }

  const rows = Array(numRows).fill('');
  let row = 0;
  let goingUp = true;

  for (let i = 0; i < s.length; i++) {
    rows[row] += s[i];
    if (row === 0 || (goingUp && row < numRows - 1)) {
      row++;
      goingUp = true
    } else {
      row--;
      goingUp = false;
    }
  }

  return rows.join('');
};


const s = "PAYPALISHIRING";
const numRows = 3;
console.log('convert: ', convert(s, numRows));
