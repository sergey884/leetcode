# [139. Word Break](https://leetcode.com/problems/word-break/description/)

Given a string `s` and a dictionary of strings `wordDict`, return `true` if s can be segmented into a space-separated sequence of one or more dictionary words.

**Note** that the same word in the dictionary may be reused multiple times in the segmentation.

 
### Example 1:
> Input: s = "leetcode", wordDict = ["leet","code"]
>
> Output: true
>
> Explanation: Return true because "leetcode" can be segmented as "leet code".


### Example 2:
> Input: s = "applepenapple", wordDict = ["apple","pen"]
>
> Output: true
>
> Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
>
> Note that you are allowed to reuse a dictionary word.


### Example 3:
> Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
>
> Output: false
 

### Constraints:
- `1 <= s.length <= 300`
- `1 <= wordDict.length <= 1000`
- `1 <= wordDict[i].length <= 20`
- `s` and `wordDict[i]` consist of only lowercase English letters.
- All the strings of `wordDict` are **unique**.


## Solutions

### Performance

- **Time Complexity**: `O(n * m * k)`
> `m - number of words in dictionary`
>
> `k - average word length in dictionary`
- **Space Complexity**: `O(n)`

### Javascript
```javascript
const wordBreak = (s, wordDict) => {
  const sLen = s.length;
  const dp = Array(sLen + 1).fill(false);
  dp[sLen] = true;

  for (let i = sLen; i >= 0; i--) {
    for (let j = 0; j < wordDict.length; j++) {
      if ((i + wordDict[j].length) <= sLen && s.substring(i, i + wordDict[j].length) === wordDict[j]) {
        dp[i] = dp[i + wordDict[j].length];
      }
      if (dp[i]) {
        break;
      }
    }
  }

  return dp[0];
};
```

### Performance

- **Time Complexity**: `O(n * m * k)`
> `m - number of words in dictionary`
>
> `k - average word length in dictionary`
- **Space Complexity**: `O(n)`

### Python
```python
class Solution:
  def wordBreak(self, s: str, wordDict: List[str]) -> bool:
    dp = [False] * (len(s) + 1)
    dp[len(s)] = True
    
    for i in range(len(s) - 1, -1, -1):
      print('i: ', i)
      for w in wordDict:
        if (i + len(w)) <= len(s) and s[i: i + len(w)] == w:
          dp[i] = dp[i + len(w)]
        if dp[i]:
          break
        
    return dp[0]
```