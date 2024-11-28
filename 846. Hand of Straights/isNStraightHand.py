class Solution:
  def isNStraightHand(self, hand: List[int], groupSize: int) -> bool:
    cardCount = {}
    for c in hand:
      if c not in cardCount:
        cardCount[c] = 0
      cardCount[c] += 1

    for start in sorted(cardCount):
      value = cardCount[start]
      if value > 0:
        for i in range(start, start + groupSize):
          if i not in cardCount:
            return False
          cardCount[i] -= value
          if cardCount[i] < 0:
            return False
          
    return True



hand = [1,2,3,6,2,3,4,7,8]
groupSize = 3
solution = Solution()    
print('isNStraightHand: ', solution.isNStraightHand(hand, groupSize))
