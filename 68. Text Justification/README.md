# [68. Text Justification](https://leetcode.com/problems/text-justification/description/)

Given an array of strings `words` and a width `maxWidth`, format the text such that each line has exactly `maxWidth` characters and is fully (left and right) justified.

You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces `' '` when necessary so that each line has exactly `maxWidth` characters.

Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line does not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.

For the last line of text, it should be left-justified, and no extra space is inserted between words.

**Note:**
- A word is defined as a character sequence consisting of non-space characters only.
- Each word's length is guaranteed to be greater than `0` and not exceed `maxWidth`.
- The input array `words` contains at least one word.
 

### Example 1:
> Input: words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16
>
> Output:
```
[
  "This    is    an",
  "example  of text",
  "justification.  "
]
```


### Example 2:
> Input: words = ["What","must","be","acknowledgment","shall","be"], maxWidth = 16
>
> Output:
```
[
  "What   must   be",
  "acknowledgment  ",
  "shall be        "
]
```
>
> Explanation: Note that the last line is "shall be    " instead of "shall     be", because the last line must be left-justified instead of fully-justified.
>
> Note that the second line is also left-justified because it contains only one word.


### Example 3:
> Input: words = ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"], maxWidth = 20
>
> Output:
```
[
  "Science  is  what we",
  "understand      well",
  "enough to explain to",
  "a  computer.  Art is",
  "everything  else  we",
  "do                  "
]
```

### Constraints:
- `1 <= words.length <= 300`
- `1 <= words[i].length <= 20`
- `words[i]` consists of only English letters and symbols.
- `1 <= maxWidth <= 100`
- `words[i].length <= maxWidth`


## Solutions

### Performance

- **Time Complexity**: $O(n)$
- **Space Complexity**: $O(n)$

### Javascript
```javascript
const fullJustify = (words, maxWidth) => {
  const res = [];
  let line = [];
  let lineLength = 0;
  let i = 0;

  while (i < words.length) {
    if (lineLength + line.length + words[i].length > maxWidth) {
      const extraSpaces = maxWidth - lineLength;
      const spaces = Math.floor(extraSpaces /  Math.max(1, line.length - 1));
      let reminderSpaces = extraSpaces % Math.max(1, line.length - 1)

      for (let j = 0; j < Math.max(1, line.length - 1); j++) {
        line[j] += " ".repeat(spaces)
        if (reminderSpaces) {
          line[j] += " ";
          reminderSpaces--;
        }
      }

      res.push(line.join(''));
      line = [];
      lineLength = 0;
    }

    line.push(words[i]);
    lineLength += words[i].length;
    i++;
  }

  const lastLine = line.join(' ');
  const trailingSpaces = maxWidth - lastLine.length;
  res.push(lastLine + " ".repeat(trailingSpaces));

  return res;
};
```

### Performance

- **Time Complexity**: $O(n)$
- **Space Complexity**: $O(n)$

### Python
```python
class Solution:
  def fullJustify(self, words: List[str], maxWidth: int) -> List[str]:
    res = []
    line, lineLength = [], 0
    i = 0

    while i < len(words):
      if lineLength + len(line) + len(words[i]) > maxWidth:
        extraSpaces = maxWidth - lineLength
        spaces = extraSpaces // max(1, len(line) - 1)
        reminderSpaces = extraSpaces % max(1, len(line) - 1)

        for j in range(max(1, len(line) - 1)):
          line[j] += " " * spaces
          if reminderSpaces:
            line[j] += " "
            reminderSpaces -= 1
        
        res.append(''.join(line))
        line, lineLength = [], 0


      line.append(words[i])
      lineLength += len(words[i])
      i += 1
    
    lastLine = ' '.join(line)
    trailingSpaces = maxWidth - len(lastLine)
    res.append(lastLine + " " * trailingSpaces)

    return res
```