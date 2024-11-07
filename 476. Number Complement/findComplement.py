class Solution:
  def findComplement(self, num: int) -> int:
    bitmask = 1
    numCopy = num
    while numCopy:
      num = num ^ bitmask
      bitmask = bitmask << 1
      numCopy = numCopy >> 1

    return num


solution = Solution()
print("findComplement: ", solution.findComplement(5)) # 2
