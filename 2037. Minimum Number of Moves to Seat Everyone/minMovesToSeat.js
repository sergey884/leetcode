/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
const minMovesToSeat = (seats, students) => {
  seats.sort((a, b) => a - b);
  students.sort((a, b) => a - b);

  let res = 0;
  for (let i = 0; i < students.length; i++) {
    res += Math.abs(students[i] - seats[i])
  }

  return res;
};

const seats = [4, 1, 5, 9];
const students = [1, 3, 2, 6];
console.log('minMovesToSeat: ', minMovesToSeat(seats, students));
