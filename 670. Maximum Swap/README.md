# [670. Maximum Swap](https://leetcode.com/problems/maximum-swap/description)

You are given an integer `num`. You can swap two digits at most once to get the maximum valued number.

Return the maximum valued number you can get.

 
### Example 1:
> Input: num = 2736
>
> Output: 7236
>
> Explanation: Swap the number 2 and the number 7.


### Example 2:
> Input: num = 9973
>
> Output: 9973
>
> Explanation: No swap.
 

### Constraints:
- $0 <= num <= 10^{8}$


## Solutions

### Performance

- **Time Complexity**: $O(n)$
- **Space Complexity**: $O(n)$

### Javascript
```javascript
const maximumSwap = (num) => {
  let numStrArr = String(num).split('');
  const l = numStrArr.length;
  const maxRightIndex = Array(l).fill(0);
  maxRightIndex[l - 1] = l - 1;
  
  for (let i = l - 2; i >= 0; i--) {
    maxRightIndex[i] = parseInt(numStrArr[i]) > parseInt(numStrArr[maxRightIndex[i + 1]]) ? i : maxRightIndex[i + 1];
  }

  for (let j = 0; j < l; j++) {
    if (parseInt(numStrArr[j]) < parseInt(numStrArr[maxRightIndex[j]])) {
      [numStrArr[j], numStrArr[maxRightIndex[j]]] = [numStrArr[maxRightIndex[j]], numStrArr[j]];
      break;
    }
  }

  return parseInt(numStrArr.join(''));
};
```

### Performance

- **Time Complexity**: $O(n)$
- **Space Complexity**: $O(1)$

### Python
```python

```