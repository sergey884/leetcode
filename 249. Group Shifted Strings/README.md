# [249. Group Shifted Strings](https://leetcode.com/problems/group-shifted-strings/description/)

Perform the following shift operations on a string:

- **Right shift:** Replace every letter with the **successive** letter of the English alphabet, where 'z' is replaced by 'a'. For example, `"abc"` can be right-shifted to `"bcd"` or `"xyz"` can be right-shifted to "yza".

- **Left shift:** Replace every letter with the **preceding** letter of the English alphabet, where 'a' is replaced by 'z'. For example, "bcd" can be left-shifted to `"abc"` or `"yza"` can be left-shifted to `"xyz"`.

We can keep shifting the string in both directions to form an **endless shifting sequence**.

- For example, shift "abc" to form the sequence: `... <-> "abc" <-> "bcd" <-> ... <-> "xyz" <-> "yza" <-> .... <-> "zab" <-> "abc" <-> ...`

You are given an array of strings `strings`, group together all `strings[i]` that belong to the same shifting sequence. You may return the answer in **any order**.

 
### Example 1:
> Input: strings = ["abc","bcd","acef","xyz","az","ba","a","z"]
>
> Output: [["acef"],["a","z"],["abc","bcd","xyz"],["az","ba"]]


### Example 2:
> Input: strings = ["a"]
>
> Output: [["a"]]

 
### Constraints:
- `1 <= strings.length <= 200`
- `1 <= strings[i].length <= 50`
- `strings[i]` consists of lowercase English letters.


## Solutions

### Performance

- **Time Complexity**: $O(n)$
- **Space Complexity**: $O(n)$

### Javascript
```javascript
const groupStrings = (strings) => {
  const group = {};
  const shiftLetter = (letter, shift) => {
    const chCode = (letter.charCodeAt(0) - shift + 26) % 26 + 'a'.charCodeAt(0);
    return chCode;
  }

  const getHash = (str) => {
    const shift = str.charCodeAt(0);
    const strCodes = [...str].map(it => shiftLetter(it, shift));
    return String.fromCharCode(...strCodes);
  }

  for (let i = 0; i < strings.length; i++) {
    const key = getHash(strings[i]);
    if (!group[key]) {
      group[key] = [];
    }
    group[key].push(strings[i])
  }

  return Object.values(group)
};
```

### Performance

- **Time Complexity**: $O(n)$
- **Space Complexity**: $O(n)$

### Python
```python
class Solution:
  def groupStrings(self, strings: List[str]) -> List[List[str]]:
    group = {}
    def shift_letter(letter , shift):
      c = (ord(letter) - shift) % 26 + ord('a')
      return chr(c)
    
    def get_hash(string):
      shift = ord(string[0])
      letters_arr = [shift_letter(letter, shift) for letter in string]
      return ''.join(letters_arr)
    
    for s in strings:
      key = get_hash(s)
      if key not in group:
        group[key] = []
      group[key].append(s)

    return list(group.values())
```