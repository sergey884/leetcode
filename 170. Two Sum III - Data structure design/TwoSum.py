class TwoSum:
  def __init__(self) -> None:
    self.numberCounts = {}

  def add(self, num):
    if num not in self.numberCounts:
      self.numberCounts[num] = 0
    
    self.numberCounts[num] += 1

  def find(self, target):
    for num in self.numberCounts:
      remainingSum = target - num
      if num == remainingSum:
        if self.numberCounts[remainingSum] > 1:
          return  True
      elif remainingSum in self.numberCounts:
        return True

    return False

solution = TwoSum()
solution.add(1)
solution.add(3)
solution.add(5)
solution.add(3)
solution.add(2)
solution.add(2)
print('numberCounts: ', solution.numberCounts)
print('find(4): ', solution.find(4))
print('find(7): ', solution.find(7))