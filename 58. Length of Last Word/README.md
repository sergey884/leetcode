# [58. Length of Last Word](https://leetcode.com/problems/length-of-last-word/description/)

Given a string `s` consisting of words and spaces, return the length of the **last** word in the string.

A **word** is a maximal substring (A substring is a contiguous non-empty sequence of characters within a string) consisting of non-space characters only.

 
### Example 1:
> Input: s = "Hello World"
>
> Output: 5
>
> Explanation: The last word is "World" with length 5.


### Example 2:
> Input: s = "   fly me   to   the moon  "
>
> Output: 4
>
> Explanation: The last word is "moon" with length 4.


### Example 3:
> Input: s = "luffy is still joyboy"
>
> Output: 6
>
> Explanation: The last word is "joyboy" with length 6.
 

### Constraints:
- `1 <= s.length <=` $10^4$
- `s` consists of only English letters and spaces `' '`.
- There will be at least one word in `s`.


## Solutions

### Javascript
```javascript
const lengthOfLastWord = (s) => {
  let i = s.length - 1;
  let lastWordLength = 0;

  while (s[i] === ' ') {
    i--;
  }

  while (i >= 0 && s[i] !== ' ') {
    lastWordLength++;
    i--;
  }

  return lastWordLength;
};
```

### Python
```python
class Solution:
  def lengthOfLastWord(self, s: str) -> int:
    i, lastWordLength = len(s) - 1, 0
    
    while s[i] == ' ':
      i -= 1
      
    while i >= 0 and s[i] != ' ':
      lastWordLength += 1
      i -= 1
      
    return lastWordLength
```