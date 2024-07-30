class Solution:
  def minimumDeletions(self, s: str) -> int:
    if not s:
      return 0

    l = len(s)
    countAOnRightArr = [0] * l
    countAOnRight = 0
    countBOnLeft = 0
    res = l
    
    for i in range(l - 1, -1, -1):
      countAOnRightArr[i] = countAOnRight
      if s[i] == 'a':
        countAOnRight += 1
    
    for i in range(l):
      res = min(res, countBOnLeft + countAOnRightArr[i])
      if s[i] == 'b':
        countBOnLeft += 1
    
    return res
        
s = "aababbab"
solution = Solution()
print('minimumDeletions: ', solution.minimumDeletions(s))
