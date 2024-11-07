class Solution:
  def minDistance(self, word1: str, word2: str) -> int:
    memo = [
      [None for _ in range(len(word2) + 1) ] for _ in range(len(word1) + 1)
    ]

    def minDistanceRecursion(word1, word2, word1Index, word2Index):
      if word1Index == 0:
        return word2Index
      
      if word2Index == 0:
        return word1Index
  
      if memo[word1Index][word2Index]:
        return memo[word1Index][word2Index]
    
      if word1[word1Index - 1] == word2[word2Index - 1]:
        return minDistanceRecursion(word1, word2, word1Index - 1, word2Index - 1)
      
      insert = 1 + minDistanceRecursion(word1, word2, word1Index, word2Index - 1)
      delete = 1 + minDistanceRecursion(word1, word2, word1Index - 1, word2Index)
      replace = 1 + minDistanceRecursion(word1, word2, word1Index - 1, word2Index - 1)
      minEditDistance = min(insert, delete, replace)

      memo[word1Index][word2Index] = minEditDistance

      return minEditDistance

    return minDistanceRecursion(word1, word2, len(word1), len(word2))
                                     
word1 = "horse"
word2 = "ros"
solution = Solution()
print('minDistance: ', solution.minDistance(word1, word2)) # 3
