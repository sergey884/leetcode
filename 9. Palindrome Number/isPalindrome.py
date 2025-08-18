class Solution:
  def isPalindrome(self, x: int) -> bool:
    if x < 0:
      return False
    
    reversed = 0
    original = x
    while x > 0:
      digit = x % 10
      reversed = reversed * 10 + digit
      x = x // 10

    return original == reversed
  

x = 121
solution = Solution()
print('isPalindrome: ', solution.isPalindrome(x)) # True
