class Logger {
  constructor() {
    this.messages = {};
  }
  /** 
  * @param {number} timestamp 
  * @param {string} message
  * @return {boolean}
  */
  shouldPrintMessage(timestamp, message) {
    if (typeof this.messages[message] === 'undefined' || timestamp - this.messages[message] >= 10) {
      this.messages[message] = timestamp;
      return true;
    }
    return false;
  }
};

/** 
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */

const logger = new Logger();
console.log(logger.shouldPrintMessage(1, "foo"));  // return true, next allowed timestamp for "foo" is 1 + 10 = 11
console.log(logger.shouldPrintMessage(2, "bar"));  // return true, next allowed timestamp for "bar" is 2 + 10 = 12
console.log(logger.shouldPrintMessage(3, "foo"));  // 3 < 11, return false
console.log(logger.shouldPrintMessage(8, "bar"));  // 8 < 12, return false
console.log(logger.shouldPrintMessage(10, "foo")); // 10 < 11, return false
console.log(logger.shouldPrintMessage(11, "foo")); // 11 >= 11, return true, next allowed timestamp for "foo" is 11 + 10 = 21
