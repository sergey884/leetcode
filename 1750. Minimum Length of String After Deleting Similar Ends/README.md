# [1750. Minimum Length of String After Deleting Similar Ends](https://leetcode.com/problems/minimum-length-of-string-after-deleting-similar-ends/description/)

Given a string `s` consisting only of characters `'a'`, `'b'`, and `'c'`. You are asked to apply the following algorithm on the string any number of times:

1. Pick a **non-empty** prefix from the string `s` where all the characters in the prefix are equal.
2. Pick a **non-empty** suffix from the string `s` where all the characters in this suffix are equal.
3. The prefix and the suffix should not intersect at any index.
4. The characters from the prefix and suffix must be the same.
5. Delete both the prefix and the suffix.

Return the **minimum length** of `s` after performing the above operation any number of times (possibly zero times).


### Example 1:
> Input: `s = "ca"`
>
> Output: `2`
>
> Explanation: `You can't remove any characters, so the string stays as is.`


### Example 2:
> Input: `s = "cabaabac"`
>
> Output: `0`
>
> Explanation: `An optimal sequence of operations is:`
>
> `- Take prefix = "c" and suffix = "c" and remove them, s = "abaaba".`
>
> `- Take prefix = "a" and suffix = "a" and remove them, s = "baab".`
>
> `- Take prefix = "b" and suffix = "b" and remove them, s = "aa".`
>
> `- Take prefix = "a" and suffix = "a" and remove them, s = "".`


### Example 3:
> Input: `s = "aabccabba"`
>
> Output: `3`
>
> Explanation: `An optimal sequence of operations is:`
>
> `- Take prefix = "aa" and suffix = "a" and remove them, s = "bccabb".`
>
> `- Take prefix = "b" and suffix = "bb" and remove them, s = "cca".`
 

### Constraints:
- `1 <= s.length <= 10^5`
- `s` only consists of characters `'a'`, `'b'`, and `'c'`.


## Solutions

### Javascript
```javascript
const minimumLength = (s) => {
  let left = 0;
  let right = s.length - 1;

  while (left < right && s[left] === s[right]) {
    while (left + 1 < right && s[left] == s[left + 1]) {
      left++;
    }

    while (left < right - 1 && s[right] == s[right - 1]) {
      right--;
    }

    left++;
    right--;
  }

  return right - left + 1;
};
```

### Python
```python
class Solution:
  def minimumLength(self, s: str) -> int:
    start = 0
    end = len(s) - 1

    while start < end and s[start] == s[end]:
      while start + 1 < end and s[start] == s[start + 1]:
        start += 1
      while start < end - 1 and s[end] == s[end - 1]:
        end -= 1

      start += 1
      end -= 1

    return end - start + 1
```