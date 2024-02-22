class Solution:
  def isUgly(self, n: int) -> bool:
    if n <= 0:
      return False

    primeNumbers = [2, 3, 5]
    for pn in primeNumbers:
      while n % pn == 0:
        n = n / pn

    return n == 1