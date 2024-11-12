/**
 * @param {string[]} logs
 * @return {number}
 */
const minOperations = (logs) => {
  let minOpCnt = 0;

  for (let i = 0; i < logs.length; i++) {
    if (logs[i] === "../") {
      minOpCnt -= minOpCnt > 0 ? 1 : 0;
    } else if (logs[i] !== "./") {
      minOpCnt++;
    }
  }

  return minOpCnt;
};

const logs = ["d1/", "d2/", "../", "d21/", "./"];
console.log("minOperations: ", minOperations(logs));
