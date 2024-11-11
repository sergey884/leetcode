# [72. Edit Distance](https://leetcode.com/problems/edit-distance/description/)

Given two strings `word1` and `word2`, return the minimum number of operations required to convert `word1` to `word2`.

You have the following three operations permitted on a word:
- Insert a character
- Delete a character
- Replace a character
 

### Example 1:
> Input: word1 = "horse", word2 = "ros"
>
> Output: 3
>
> Explanation:
>
> horse -> rorse (replace 'h' with 'r')
>
> rorse -> rose (remove 'r')
>
> rose -> ros (remove 'e')


### Example 2:
> Input: word1 = "intention", word2 = "execution"
>
> Output: 5
>
> Explanation:
>
> intention -> inention (remove 't')
>
> inention -> enention (replace 'i' with 'e')
>
> enention -> exention (replace 'n' with 'x')
>
> exention -> exection (replace 'n' with 'c')
>
> exection -> execution (insert 'u')
 

### Constraints:
- `0 <= word1.length, word2.length <= 500`
- `word1` and `word2` consist of lowercase English letters.


## Solutions

### Performance

- **Time Complexity**: $O(M * N)$
- **Space Complexity**: $O(M * N)$

### Javascript

```javascript
const minDistance = (word1, word2) => {
  const M = word1.length;
  const N = word2.length;
  const memo = Array(M).fill(null).map(() => Array(N).fill(null));

  const minDistanceRecursion = (word1, word2, word1Index, word2Index) => {
    if (word1Index === word1.length) {
      return word2.length - word2Index; 
    }

    if (word2Index === word2.length) {
      return word1.length - word1Index;
    }

    if (memo[word1Index][word2Index] !== null) {
      return memo[word1Index][word2Index];
    }

    if (word1[word1Index] === word2[word2Index]) {
      return minDistanceRecursion(word1, word2, word1Index + 1, word2Index + 1);
    }

    const insert = 1 + minDistanceRecursion(word1, word2, word1Index, word2Index + 1);
    const remove = 1 + minDistanceRecursion(word1, word2, word1Index + 1, word2Index);
    const replace = 1 + minDistanceRecursion(word1, word2, word1Index + 1, word2Index + 1);
    const minEditDistance = Math.min(insert, remove, replace);
    memo[word1Index][word2Index] = minEditDistance;

    return minEditDistance;
  }

  return minDistanceRecursion(word1, word2, 0, 0);
};
```

### Performance

- **Time Complexity**: $O(M * N)$
- **Space Complexity**: $O(M * N)$

### Python

```python
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
```