# [3. Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/description/)

Given a string s, find the length of the longest substring (a substring is a contiguous non-empty sequence of characters within a string) without repeating characters.


### Example 1:
> Input: `s = "abcabcbb"`
> Output: `3`
> Explanation: `The answer is "abc", with the length of 3.`


### Example 2:
> Input: `s = "bbbbb"`
> Output: `1`
> Explanation: `The answer is "b", with the length of 1.`


### Example 3:
> Input: `s = "pwwkew"`
>
> Output: `3`
>
> Explanation: `The answer is "wke", with the length of 3.`
>
> `Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.`
 

### Constraints:
- `0 <= s.length <= 5 * 10^4`
- `s` consists of English letters, digits, symbols and spaces.


## Solutions

### Javascript
```javascript
const lengthOfLongestSubstring = (s) => {
  const previousChars = new Set();
  let left = 0;
  let right = 0;
  let count = 0;
  let maxCount = 0;

  while (right < s.length) {
    if (!previousChars.has(s[right])) {
      previousChars.add(s[right]);
      right++;
      count++;
      maxCount = Math.max(maxCount, count);
    } else {
      previousChars.delete(s[left]);
      left++;
      count--;
    }
  }

  return maxCount;
};
```

### Python
```python
class Solution:
  def lengthOfLongestSubstring(self, s: str) -> int:
    previousChars = set()
    count = 0
    maxCount = 0
    left, right = 0, 0

    while right < len(s):
      if s[right] not in previousChars:
        previousChars.add(s[right])
        right += 1
        count += 1
        maxCount = max(maxCount, count)
      else:
        previousChars.remove(s[left])
        count -= 1
        left += 1

    return maxCount
```