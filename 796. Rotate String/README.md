# [796. Rotate String](https://leetcode.com/problems/rotate-string/description)

Given two strings `s` and `goal`, return `true` if and only if `s` can become `goal` after some number of **shifts** on `s`.

A shift on `s` consists of moving the leftmost character of `s` to the rightmost position.
- For example, if `s = "abcde"`, then it will be `"bcdea"` after one shift.
 

### Example 1:
> Input: s = "abcde", goal = "cdeab"
>
> Output: true


### Example 2:
> Input: s = "abcde", goal = "abced"
>
> Output: false
 

### Constraints:
- `1 <= s.length, goal.length <= 100`
- `s` and `goal` consist of lowercase English letters.


## Solutions

### Performance

- **Time Complexity**: $O(n^{2})$
- **Space Complexity**: $O(1)$

### Javascript
```javascript
const rotateString = (s, goal) => {
  if (s.length !== goal.length) {
    return false;
  }

  let rotatedString = s;
  for (let i = 0; i < s.length; i++) {
    rotatedString = rotatedString.slice(1) + rotatedString[0];
    if (rotatedString === goal) {
      return true;
    }
  }

  return false;
};
```

### Performance

- **Time Complexity**: $O(n)$
- **Space Complexity**: $O(n)$

### Javascript
```javascript
const rotateString = (s, goal) => {
  if (s.length !== goal.length) {
    return false;
  }

  const doubledString = s + s;

  return doubledString.indexOf(goal) > -1;
  // return doubledString.includes(goal);
};
```

### Performance

- **Time Complexity**: $O(n)$
- **Space Complexity**: $O(n)$

### Python
```python

```