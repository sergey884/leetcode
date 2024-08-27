# [127. Word Ladder](https://leetcode.com/problems/word-ladder/description/)

A **transformation sequence** from word beginWord to word endWord using a dictionary wordList is a sequence of words $beginWord -> s_{1} -> s_{2} -> ... -> s_{k}$ such that:

- Every adjacent pair of words differs by a single letter.
- Every $s_{i}$ for $1 <= i <= k$ is in `wordList`. Note that `beginWord` does not need to be in `wordList`.
- $s_{k} == endWord$

Given two words, `beginWord` and `endWord`, and a dictionary `wordList`, return the **number of words** in the **shortest transformation sequence** from beginWord to endWord, or 0 if no such sequence exists.


### Example 1:
> Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
>
> Output: 5
>
> Explanation: One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long.


### Example 2:
> Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
>
> Output: 0
>
> Explanation: The endWord "cog" is not in wordList, therefore there is no valid transformation sequence.
 

### Constraints:
- `1 <= beginWord.length <= 10`
- `endWord.length == beginWord.length`
- `1 <= wordList.length <= 5000`
- `wordList[i].length == beginWord.length`
- `beginWord`, `endWord`, and `wordList[i]` consist of lowercase English letters.
- `beginWord != endWord`
- All the words in `wordList` are **unique**.


## Solutions

### Performance

- **Time Complexity**: $O(n)$
- **Space Complexity**: $O(n)$

### Javascript
```javascript
const ladderLength = (beginWord, endWord, wordList) => {
  const neibors = {};
  wordList.push(beginWord);

  for (let i = 0; i < wordList.length; i++) {
    const word = wordList[i];
    for (let j = 0; j < word.length; j++) {
      const key = word.slice(0, j) + '*' + word.slice(j + 1);
      if (!neibors[key]) {
        neibors[key] = [];
      }
      neibors[key].push(word);
    }
  }

  const queue = [[beginWord, 1]];
  const visited = new Set();

  while (queue.length) {
    const [word, level] = queue.pop();
    for (let i = 0; i < word.length; i++) {
      const key = word.slice(0, i) + '*' + word.slice(i + 1);
      const wordNeibors = neibors[key];
      for (let j = 0; j < wordNeibors.length; j++) {
        if (wordNeibors[j] === endWord) {
          return level + 1;
        }
        if (!visited.has(wordNeibors[j])) {
          visited.add(wordNeibors[j]);
          queue.push([wordNeibors[j], level + 1]);
        }
      }
    }
  }

  return 0;
};
```

### Performance

- **Time Complexity**: $O(n)$
- **Space Complexity**: $O(n)$

### Python
```python
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
```