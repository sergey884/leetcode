# [884. Uncommon Words from Two Sentences](https://leetcode.com/problems/uncommon-words-from-two-sentences/description)

A **sentence** is a string of single-space separated words where each word consists only of lowercase letters.

A word is **uncommon** if it appears exactly once in one of the sentences, and **does not appear** in the other sentence.

Given two **sentences** `s1` and `s2`, return a list of all the **uncommon words**. You may return the answer in **any order**.


### Example 1:
> Input: s1 = "this apple is sweet", s2 = "this apple is sour"
>
> Output: ["sweet","sour"]
>
> Explanation:
>
> The word "sweet" appears only in s1, while the word "sour" appears only in s2.


### Example 2:
> Input: s1 = "apple apple", s2 = "banana"
>
> Output: ["banana"]

 
### Constraints:
- $1 <= s1.length, s2.length <= 200$
- `s1` and `s2` consist of lowercase English letters and spaces.
- `s1` and `s2` do not have leading or trailing spaces.
- All the words in `s1` and `s2` are separated by a single space.


## Solutions

### Performance

- **Time Complexity**: $O(n)$
- **Space Complexity**: $O(n)$

### Javascript
```javascript
const uncommonFromSentences = (s1, s2) => {
  const words = [...s1.split(' '), ...s2.split(' ')];
  const wordsCount = {};

  for (const word of words) {
    wordsCount[word] = wordsCount[word] + 1 || 1;
  }

  return Object.keys(wordsCount).filter(word => wordsCount[word] === 1);
};
```

### Performance

- **Time Complexity**: $O(n)$
- **Space Complexity**: $O(n)$

### Python
```python
class Solution:
  def uncommonFromSentences(self, s1: str, s2: str) -> List[str]:
    words = s1.split() + s2.split()
    wordCount = {}
    uncommonWords = []

    for word in words:
      if word not in wordCount:
        wordCount[word] = 1
      else:
        wordCount[word] += 1

    for word in wordCount:
      if wordCount[word] == 1:
        uncommonWords.append(word)

    return uncommonWords
```