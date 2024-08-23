class Solution:
  def findComplement(self, num: int) -> int:
    bitmask = 1
    while bitmask <= num:
      print("bitmask: ", bitmask)
      num = num ^ bitmask
      bitmask = bitmask << 1

    return num
  
solution = Solution()
print("findComplement: ", solution.findComplement(5)) # 2
        