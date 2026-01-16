class Solution:
  def convert(self, s: str, numRows: int) -> str:
    if numRows == 1 or numRows >= len(s):
      return s

    rows = [''] * numRows
    row = 0
    going_up = True

    for i in range(len(s)):
      rows[row] += s[i]
      if row == 0 or (going_up and row < numRows - 1):
        row += 1
        going_up = True
      else:
        row -= 1
        going_up = False

    return ''.join(rows)


s = "PAYPALISHIRING"
numRows = 3
solution = Solution()
print('convert: ', solution.convert(s, numRows))
