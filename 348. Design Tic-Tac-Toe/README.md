# [348. Design Tic-Tac-Toe](https://leetcode.com/problems/design-tic-tac-toe/description/)

Design a Tic-tac-toe game that is played between two players on a `n x n` grid.

You may assume the following rules:

1. A move is guaranteed to be valid and is placed on an empty block.
2. Once a winning condition is reached, no more moves is allowed.
3. A player who succeeds in placing n of their marks in a horizontal, vertical, or diagonal row wins the game.


### Example 1:
> Input ["TicTacToe", "move", "move", "move", "move", "move", "move", "move"]
>
> [[3], [0, 0, 1], [0, 2, 2], [2, 2, 1], [1, 1, 2], [2, 0, 1], [1, 0, 2], [2, 1, 1]]
>
> Output [null, 0, 0, 0, 0, 0, 0, 1]

```
Explanation
TicTacToe ticTacToe = new TicTacToe(3);
Assume that player 1 is "X" and player 2 is "O" in the board.
ticTacToe.move(0, 0, 1); // return 0 (no one wins)
|X| | |
| | | |    // Player 1 makes a move at (0, 0).
| | | |

ticTacToe.move(0, 2, 2); // return 0 (no one wins)
|X| |O|
| | | |    // Player 2 makes a move at (0, 2).
| | | |

ticTacToe.move(2, 2, 1); // return 0 (no one wins)
|X| |O|
| | | |    // Player 1 makes a move at (2, 2).
| | |X|

ticTacToe.move(1, 1, 2); // return 0 (no one wins)
|X| |O|
| |O| |    // Player 2 makes a move at (1, 1).
| | |X|

ticTacToe.move(2, 0, 1); // return 0 (no one wins)
|X| |O|
| |O| |    // Player 1 makes a move at (2, 0).
|X| |X|

ticTacToe.move(1, 0, 2); // return 0 (no one wins)
|X| |O|
|O|O| |    // Player 2 makes a move at (1, 0).
|X| |X|

ticTacToe.move(2, 1, 1); // return 1 (player 1 wins)
|X| |O|
|O|O| |    // Player 1 makes a move at (2, 1).
|X|X|X|
```


### Constraints:
- `2 <= n <= 100`
- player is `1` or `2`.
- `0 <= row, col < n`
- `(row, col)` are **unique** for each different call to `move`.
- At most $n^2$ calls will be made to `move`.


**Follow-up:** Could you do better than O($n^2$) per `move()` operation?


## Solutions

### Javascript
```javascript
class TicTacToe {
  constructor(n) {
    this.rows = Array(n).fill(0);
    this.cols = Array(n).fill(0);
    this.diag = 0;
    this.antiDiag = 0;
    this.n = n;
  }

  move(row, col, player) {
    const toAdd = player === 1 ? 1 : -1;
    const target = player === 1 ? this.n : -this.n;

    this.rows[row] += toAdd;
    this.cols[col] += toAdd;

    if (row === col) {
      this.diag += toAdd;
    }

    if (row + col === this.n) {
      this.antiDiag += toAdd;
    }

    if ((this.rows[row] === target || this.cols[col] === target) ||
      (this.diag === target || this.antiDiag === target)) {
      return player;
    }

    return 0;
  }
};
```

### Python
```python
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
```