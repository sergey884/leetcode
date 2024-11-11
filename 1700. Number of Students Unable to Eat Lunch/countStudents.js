/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
const countStudents = (students, sandwiches) => {
  const count = {};
  for (let i = 0; i < students.length; i++) {
    if (!count[students[i]]) {
      count[students[i]] = 0;
    }
    count[students[i]]++;
  }

  for (let i = 0; i < sandwiches.length; i++) {
    if ((count[sandwiches[i]] || 0) === 0) {
      return sandwiches.length - i;
    }
    count[sandwiches[i]]--;
  }

  return 0;
};

const students = [1, 1];
const sandwiches = [0, 1];
console.log('countStudents: ', countStudents(students, sandwiches))
