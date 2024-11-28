class TicTacToe(object):
  def __init__(self, n):
    self.rows = [0] * n
    self.cols = [0] * n
    self.diag = 0
    self.antiDiag = 0
    self.n = n

  def move(self, row, col, player):
    toAdd = 1 if player == 1 else -1
    target = self.n if player == 1 else -self.n
    
    self.rows[row] += toAdd
    self.cols[col] += toAdd
    
    if row == col:
      self.diag += toAdd
      
    if row + col == self.n:
      self.antiDiag += toAdd
      
    if ((self.rows[row] == target or self.cols[col] == target) or
      (self.diag == target or self.antiDiag) == target):
      return player

    return 0


n = 3
ticTacToe = TicTacToe(n)
print(ticTacToe.move(0, 0, 1)); # return 0 (no one wins)
print(ticTacToe.move(0, 2, 2)); # return 0 (no one wins)
print(ticTacToe.move(2, 2, 1)); # return 0 (no one wins)
print(ticTacToe.move(1, 1, 2)); # return 0 (no one wins)
print(ticTacToe.move(2, 0, 1)); # return 0 (no one wins)
print(ticTacToe.move(1, 0, 2)); # return 0 (no one wins)
print(ticTacToe.move(2, 1, 1)); # return 1 (player 1 wins)