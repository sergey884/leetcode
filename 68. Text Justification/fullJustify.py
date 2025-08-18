from typing import List

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
        

words = ["This", "is", "an", "example", "of", "text", "justification."]
maxWidth = 16
solution = Solution()
print('fullJustify: ', solution.fullJustify(words, maxWidth))
