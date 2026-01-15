from typing import List

class Solution:
  def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:
    if endWord not in wordList:
      return 0

    neighbors = {}
    wordList.append(beginWord)
    for word in wordList:
      for i in range(len(word)):
        key = word[:i] + '*' + word[i + 1:]
        if key not in neighbors:
          neighbors[key] = []
        neighbors[key].append(word)

    queue = [(beginWord, 1)]
    visited = set([beginWord])

    while queue:
      word, level = queue.pop(0)
      for i in range(len(word)):
        key = word[:i] + '*' + word[i + 1:]
        for neighbor in neighbors[key]:
          if neighbor == endWord:
            return level + 1
          if neighbor not in visited:
            visited.add(neighbor)
            queue.append((neighbor, level + 1))

    return 0
  

beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log","cog"]
solution = Solution()
print('ladderLength: ', solution.ladderLength(beginWord, endWord, wordList)) # 5

        