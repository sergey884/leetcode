class Solution:
  def maximumOddBinaryNumber(self, s: str) -> str:
    res = [char for char in s]
    left = 0

    for i in range(len(s)):
      if res[i] == '1':
        res[left], res[i] = res[i], res[left]
        left += 1

    res[left - 1], res[len(s) - 1] = res[len(s) - 1], res[left - 1]

    return ''.join(res)
  
solution = Solution()
s = "0101"
print('maximumOddBinaryNumber: ', solution.maximumOddBinaryNumber(s))