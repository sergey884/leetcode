from typing import List

class Solution:
  def minHeightShelves(self, books: List[List[int]], shelfWidth: int) -> int:
    cache = {}
    def helper(i):
      if i == len(books):
        return 0
      if i in cache:
        return cache[i]
      curr_width = shelfWidth
      max_height = 0
      cache[i] = float('inf')
      
      for j in range(i, len(books)):
        width, height = books[j]
        if curr_width < width:
          break
        curr_width -= width
        max_height = max(max_height, height)
        cache[i] = min(cache[i], helper(j + 1) + max_height)
      
      return cache[i]
    
    return helper(0)


books = [[1,1],[2,3],[2,3],[1,1],[1,1],[1,1],[1,2]]
shelfWidth = 4
solution = Solution()
print('minHeightShelves: ', solution.minHeightShelves(books, shelfWidth))
