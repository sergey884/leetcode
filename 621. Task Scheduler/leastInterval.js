/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
const leastInterval = (tasks, n) => {
  const frequency = {};
  for (const task of tasks) {
    frequency[task] = frequency[task] + 1 || 1;
  }

  let maxVal = 0;
  let maxValCount = 0;

  for (const key in frequency) {
    if (frequency[key] > maxVal) {
      maxVal = frequency[key];
      maxValCount = 1;
    } else if (frequency[key] === maxVal) {
      maxValCount++;
    }
  }

  // Example ["A","A","A","B","B","C"], n = 2
  // A _ _ A _ _ A
  // Find the number of parts separated by A: partCount = count(A) - 1 = 2
  // Determine the number of empty slots: emptySlots = partCount * n = 4
  // Identify the number of tasks to be placed into those slots: availableTasks = tasks.length - count(A) = 3.
  // Determine the number of idles: idles = max(0, emptySlots - availableTasks) = 1
  // Determine the number of required slots: tasks.length + idles = 6 + 1 = 7

  const partCount = maxVal - 1;
  const partLength = n - (maxValCount - 1);
  const emptySlots = partCount * partLength;
  const availableTasks = tasks.length - maxVal * maxValCount;
  const idles = Math.max(0, emptySlots - availableTasks);

  return tasks.length + idles;
};


const tasks = ["A", "A", "A", "B", "B", "B"];
const n = 2;
console.log('leastInterval: ', leastInterval(tasks, n)); // 8
