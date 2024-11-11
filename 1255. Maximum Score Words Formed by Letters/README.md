# [1255. Maximum Score Words Formed by Letters](https://leetcode.com/problems/maximum-score-words-formed-by-letters/description/)

Given a list of `words`, list of  single `letters` (might be repeating) and score of every character.

Return the maximum score of **any** valid set of words formed by using the given letters (`words[i]` cannot be used two or more times).

It is not necessary to use all characters in letters and each letter can only be used once. Score of letters `'a'`, `'b'`, `'c'`, ... ,`'z'` is given by `score[0]`, `score[1]`, ... , `score[25]` respectively.


### Example 1:
> Input: words = ["dog","cat","dad","good"], letters = ["a","a","c","d","d","d","g","o","o"], score = [1,0,9,5,0,0,3,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0]
>
> Output: 23
>
> Explanation:
>
> Score  a=1, c=9, d=5, g=3, o=2
>
> Given letters, we can form the words "dad" (5+1+5) and "good" (3+2+2+5) with a score of 23.
>
> Words "dad" and "dog" only get a score of 21.


### Example 2:
> Input: words = ["xxxz","ax","bx","cx"], letters = ["z","a","b","c","x","x","x"], score = [4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,10]
>
> Output: 27
>
> Explanation:
>
> Score  a=4, b=4, c=4, x=5, z=10
>
> Given letters, we can form the words "ax" (4+5), "bx" (4+5) and "cx" (4+5) with a score of 27.
>
> Word "xxxz" only get a score of 25.


### Example 3:
> Input: words = ["leetcode"], letters = ["l","e","t","c","o","d"], score = [0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0]
>
> Output: 0
>
> Explanation:
>
> Letter "e" can only be used once.


### Constraints:
- `1 <= words.length <= 14`
- `1 <= words[i].length <= 15`
- `1 <= letters.length <= 100`
- `letters[i].length == 1`
- `score.length == 26`
- `0 <= score[i] <= 10`
- `words[i]`, `letters[i]` contains only lower case English letters.


## Solutions

### Javascript
```javascript
const maxScoreWords = (words, letters, score) => {
  const lettersCnt = {};
  for (let i = 0; i < letters.length; i++) {
    const c = letters[i];
    if (!lettersCnt[c]) {
      lettersCnt[c] = 0;
    }
    lettersCnt[c]++;
  }

  const canFormWord = (word, lettersCnt) => {
    const wordCnt = {};
    for (let i = 0; i < word.length; i++) {
      const c = word[i];
      if (!wordCnt[c]) {
        wordCnt[c] = 0;
      }
      wordCnt[c]++;
    }

    for (let j = 0; j < word.length; j++) {
      const c = word[j];
      if (wordCnt[c] > (lettersCnt[c] || 0)) {
        return false;
      }
    }

    return true;
  };

  const getScore = (word) => {
    let res = 0;
    let charA = "a".charCodeAt(0);
    for (let i = 0; i < word.length; i++) {
      const c = word[i]
      const charCode = c.charCodeAt(0);
      const index = charCode - charA;
      
      res += score[index];
    }

    return res;
  }

  const backtracking = (i) => {
    if (i === words.length) {
      return 0;
    }
    // skip the word
    let res = backtracking(i + 1);

    if (canFormWord(words[i], lettersCnt)) {
      for (let j = 0; j < words[i].length; j++) {
        const c = words[i][j];
        lettersCnt[c]--;
      }

      res = Math.max(res, getScore(words[i]) + backtracking(i + 1));

      for (let j = 0; j < words[i].length; j++) {
        const c = words[i][j];
        lettersCnt[c]++;
      }
    }
    
    return res;
  }

  return backtracking(0);
};
```

### Python
```python
class Solution:
  def maxScoreWords(self, words: List[str], letters: List[str], score: List[int]) -> int:
    def can_form_word(word, letter_cnt):
      word_cnt = Counter(word)
      for c in word_cnt:
        if word_cnt[c] > letter_cnt[c]:
          return False
      return True
    
    def get_score(word):
      res = 0
      for c in word:
        res += score[ord(c) - ord('a')]
      return res
      
    letter_cnt = Counter(letters)
    
    def backtracking(i):
      if i == len(words):
        return 0
      # skip the word
      res = backtracking(i + 1)
      
      if can_form_word(words[i], letter_cnt):
        for c in words[i]:
          letter_cnt[c] -= 1
        res = max(res, get_score(words[i]) + backtracking(i + 1))
        for c in words[i]:
          letter_cnt[c] += 1
      return res
    
    return backtracking(0)
```