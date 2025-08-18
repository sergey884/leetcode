# [30. Substring with Concatenation of All Words](https://leetcode.com/problems/substring-with-concatenation-of-all-words/description/)

You are given a string `s` and an array of strings `words`. All the strings of `words` are of **the same length**.

A concatenated substring in `s` is a substring that contains all the strings of any permutation of `words` concatenated.

- For example, if `words = ["ab","cd","ef"]`, then `"abcdef"`, `"abefcd"`, `"cdabef"`, `"cdefab"`, `"efabcd"`, and `"efcdab"` are all concatenated strings. `"acdbef"` is not a concatenated substring because it is not the concatenation of any permutation of words.

Return the starting indices of all the concatenated substrings in `s`. You can return the answer in **any order**.


### Example 1:
> Input: `s = "barfoothefoobarman", words = ["foo","bar"]`
> Output: `[0,9]`
> Explanation: `Since words.length == 2 and words[i].length == 3, the concatenated substring has to be of length 6.`
>
> `The substring starting at 0 is "barfoo". It is the concatenation of ["bar","foo"] which is a permutation of words.`
>
> `The substring starting at 9 is "foobar". It is the concatenation of ["foo","bar"] which is a permutation of words.`
>
> `The output order does not matter. Returning [9,0] is fine too.`


### Example 2:
> Input: `s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]`
>
> Output: `[]`
>
> Explanation: `Since words.length == 4 and words[i].length == 4, the concatenated substring has to be of length 16.`
>
> `There is no substring of length 16 in s that is equal to the concatenation of any permutation of words.`
>
> `We return an empty array.`


### Example 3:
> Input: `s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]`
>
> Output: `[6,9,12]`
>
> Explanation: `Since words.length == 3 and words[i].length == 3, the concatenated substring has to be of length 9.`
>
> `The substring starting at 6 is "foobarthe". It is the concatenation of ["foo","bar","the"] which is a permutation of words.`
>
> `The substring starting at 9 is "barthefoo". It is the concatenation of ["bar","the","foo"] which is a permutation of words.`
>
> `The substring starting at 12 is "thefoobar". It is the concatenation of ["the","foo","bar"] which is a permutation of words.`
 

### Constraints:
- `1 <= s.length <= 10^4`
- `1 <= words.length <= 5000`
- `1 <= words[i].length <= 30`
- `s` and `words[i]` consist of lowercase English letters.


## Solutions

### Javascript
```javascript
const findSubstring = (s, words) => {
  if (!s || !words || !words.length) {
    return [];
  }

  const wordlen = words[0].length;
  const wordslen = words.length;
  const windowLength = wordlen * wordslen;

  const wordCount = {};

  for(let i = 0; i < wordslen; i++) {
    if (!wordCount[words[i]]) {
      wordCount[words[i]] = 0;
    }

    wordCount[words[i]]++;
  }

  const res = [];

  for(let i = 0; i < s.length - windowLength + 1; i++) {
    let wordsCountInWindow = {}

    let j = i;
    while (j < i + windowLength) {
      let word = s.substring(j, j + wordlen);

      if (!wordCount[word]) {
        break;
      }

      if (!wordsCountInWindow[word]) {
        wordsCountInWindow[word] = 0;
      }

      wordsCountInWindow[word]++;

      if (wordsCountInWindow[word] > wordCount[word]) {
        break;
      }

      j += wordlen;
    }

    if (j === i + windowLength) {
      res.push(i);
    }
  }

  return res;
};
```

### Python
```python
class Solution:
  def findSubstring(self, s: str, words: List[str]) -> List[int]:
    if not s or not words:
      return []
    
    wordLen = len(words[0])
    totalLen = len(words) * wordLen

    wordCount = {}

    for word in words:
      if word not in wordCount:
        wordCount[word] = 0
      wordCount[word] += 1

    res = []

    for i in range(len(s) - totalLen + 1):
      wordCountInWindow = {}
      j = i

      while j < i + totalLen:
        word = s[j:j + wordLen]

        if word not in wordCount:
          break

        if word not in wordCountInWindow:
          wordCountInWindow[word] = 0

        wordCountInWindow[word] += 1

        if wordCountInWindow[word] > wordCount[word]:
          break

        j += wordLen

      if j == i + totalLen:
        res.append(i)

    return res
```