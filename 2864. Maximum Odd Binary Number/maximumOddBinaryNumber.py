class Solution:
  def maximumOddBinaryNumber(self, s: str) -> str:
    count = 0

    for char in s:
      if char == '1':
        count += 1

    res = (count - 1) * '1' + (len(s) - count) * '0' + '1'
    return res
  
solution = Solution()
s = "0101"
print('maximumOddBinaryNumber: ', solution.maximumOddBinaryNumber(s))