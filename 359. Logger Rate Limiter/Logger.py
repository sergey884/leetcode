class Logger:
  def __init__(self):
    self.messages = {}   

  def shouldPrintMessage(self, timestamp: int, message: str) -> bool:
    if message not in self.messages or timestamp - self.messages[message] >= 10:
      self.messages[message] = timestamp
      return True
    
    return False
        

# Your Logger object will be instantiated and called as such:
# obj = Logger()
# param_1 = obj.shouldPrintMessage(timestamp,message)

logger = Logger()
print(logger.shouldPrintMessage(1, "foo"));  # return true, next allowed timestamp for "foo" is 1 + 10 = 11
print(logger.shouldPrintMessage(2, "bar"));  # return true, next allowed timestamp for "bar" is 2 + 10 = 12
print(logger.shouldPrintMessage(3, "foo"));  # 3 < 11, return false
print(logger.shouldPrintMessage(8, "bar"));  # 8 < 12, return false
print(logger.shouldPrintMessage(10, "foo")); # 10 < 11, return false
print(logger.shouldPrintMessage(11, "foo")); # 11 >= 11, return true, next allowed timestamp for "foo" is 11 + 10 = 21
