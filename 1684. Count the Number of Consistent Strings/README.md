# [1684. Count the Number of Consistent Strings](https://leetcode.com/problems/count-the-number-of-consistent-strings/description/)

You are given a string `allowed` consisting of distinct characters and an array of strings `words`. A string is **consistent** if all characters in the string appear in the string `allowed`.

Return the number of **consistent** strings in the array words.

 
### Example 1:
> Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
>
> Output: 2
>
> Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.


### Example 2:
> Input: allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
>
> Output: 7
>
> Explanation: All strings are consistent.


### Example 3:
> Input: allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]
>
> Output: 4
>
> Explanation: Strings "cc", "acd", "ac", and "d" are consistent.
 

### Constraints:
- $1 <= words.length <= 10^{4}$
- $1 <= allowed.length <= 26$
- $1 <= words[i].length <= 10$
- The characters in `allowed` are **distinct**.
- `words[i]` and `allowed` contain only lowercase English letters.


## Solutions

### Performance

- **Time Complexity**: $O(n * m)$
- **Space Complexity**: $O(m)$

### Javascript
```javascript
const countConsistentStrings = (allowed, words) => {
  let count = 0;
  const allowedChars = new Set(allowed);

  for (let i = 0; i < words.length; i++) {
    let isConsistent = true;
    for (let j = 0; j < words[i].length; j++) {
      if (!allowedChars.has(words[i][j])) {
        isConsistent = false;
        break;
      }
    }
    if (isConsistent) {
      count++;
    }
  }

  return count;
};
```

### Performance

- **Time Complexity**: $O(n * m)$
- **Space Complexity**: $O(m)$

### Python
```python
class Solution:
  def countConsistentStrings(self, allowed: str, words: List[str]) -> int:
    count = 0
    allowedChars = set(allowed)
    
    for word in words:
      isConsistent = True
      for c in word:
        if c not in allowedChars:
          isConsistent = False
          break
      if isConsistent:
        count += 1
    
    return count
```