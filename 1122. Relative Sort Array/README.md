# [1122. Relative Sort Array](https://leetcode.com/problems/relative-sort-array/description/)

Given two arrays `arr1` and `arr2`, the elements of `arr2` are distinct, and all elements in `arr2` are also in `arr1`.

Sort the elements of `arr1` such that the relative ordering of items in `arr1` are the same as in `arr2`. Elements that do not appear in `arr2` should be placed at the end of `arr1` in **ascending** order.


### Example 1:
> Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
>
> Output: [2,2,2,1,4,3,3,9,6,7,19]


### Example 2:
> Input: arr1 = [28,6,22,8,44,17], arr2 = [22,28,8,6]
>
> Output: [22,28,8,6,17,44]
 

### Constraints:
- `1 <= arr1.length, arr2.length <= 1000`
- `0 <= arr1[i], arr2[i] <= 1000`
- All the elements of `arr2` are **distinct**.
- Each `arr2[i]` is in `arr1`.


## Solutions

### Javascript
```javascript
const relativeSortArray = (arr1, arr2) => {
  const arr2Set = new Set(arr2);
  const arr1Cnt = {};
  const end = [];

  for (let i = 0; i < arr1.length; i++) {
    if (!arr1Cnt[arr1[i]]) {
      arr1Cnt[arr1[i]] = 0;
    }
    arr1Cnt[arr1[i]]++;

    if (!arr2Set.has(arr1[i])) {
      end.push(arr1[i]);
    }
  }

  end.sort((a, b) => a - b);

  const res = [];
  for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr1Cnt[arr2[i]]; j++) {
      res.push(arr2[i]);
    }
  }

  return [...res, ...end];
};
```

### Python
```python
class Solution:
  def relativeSortArray(self, arr1: List[int], arr2: List[int]) -> List[int]:
    arr2_set = set(arr2)
    arr1_cnt = {}
    end = []

    for i in range(len(arr1)):
      if arr1[i] not in arr1_cnt:
        arr1_cnt[arr1[i]] = 0
      arr1_cnt[arr1[i]] += 1
      if arr1[i] not in arr2_set:
        end.append(arr1[i])
        
    end.sort()
    
    res = []
    for n in arr2:
      for _ in range(arr1_cnt[n]):
        res.append(n)
        
    return res + end
```