# [2418. Sort the People](https://leetcode.com/problems/sort-the-people/description/)

You are given an array of strings `names`, and an array `heights` that consists of **distinct** positive integers. Both arrays are of length `n`.

For each index `i`, `names[i]` and `heights[i]` denote the name and height of the $i^{th}$ person.

Return `names` sorted in **descending** order by the people's heights.

 
### Example 1:
> Input: names = ["Mary","John","Emma"], heights = [180,165,170]
>
> Output: ["Mary","Emma","John"]
>
> Explanation: Mary is the tallest, followed by Emma and John.


### Example 2:
> Input: names = ["Alice","Bob","Bob"], heights = [155,185,150]
>
> Output: ["Bob","Alice","Bob"]
>
> Explanation: The first Bob is the tallest, followed by Alice and the second Bob.
 

### Constraints:
- `n == names.length == heights.length`
- $1 <= n <= 10^{3}$
- `1 <= names[i].length <= 20`
- $1 <= heights[i] <= 10^{5}$
- `names[i]` consists of lower and upper case English letters.
- All the values of `heights` are distinct.


## Solutions

### Performance

- **Time Complexity**: `O(n * log n)`
- **Space Complexity**: `O(n)`

### Javascript
```javascript
const sortPeople = (names, heights) => {
  const heightsToNames = {};
  for (let i = 0; i < heights.length; i++) {
    heightsToNames[heights[i]] = names[i];
  }

  const res = [];
  heights.sort((a, b) => b - a);
  for (let i = 0; i < heights.length; i++) {
    res.push(heightsToNames[heights[i]]);
  }

  return res;
};
```

### Performance

- **Time Complexity**: `O(n * log n)`
- **Space Complexity**: `O(n)`

### Python
```python
class Solution:
  def sortPeople(self, names: List[str], heights: List[int]) -> List[str]:
    heightsToNames = {}
    
    for i in range(len(heights)):
      heightsToNames[heights[i]] = names[i]
    
    res = [] 
    for h in sorted(heights, reverse = True):
      res.append(heightsToNames[h])
    
    return res
```