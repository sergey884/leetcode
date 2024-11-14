from typing import List

class Solution:
  def singleNumber(self, nums: List[int]) -> List[int]:
    xor = 0
    for  n in nums:
      xor ^= n

    diffBit = 1
    while not xor & diffBit:
      diffBit = diffBit << 1

    a, b = 0, 0
    for n in nums:
      if diffBit & n:
        a = a ^ n
      else:
        b = b ^ n

    return [a, b]
  

nums = [1,2,1,3,2,5]
solution = Solution()
print('singleNumber: ', solution.singleNumber(nums))
