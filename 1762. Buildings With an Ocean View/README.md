# [1762. Buildings With an Ocean View](https://leetcode.com/problems/buildings-with-an-ocean-view/description)



## Solutions

### Performance

- **Time Complexity**: $O(n)$
- **Space Complexity**: $O(n)$

### Javascript
```javascript
const findBuildings = (heights) => {
  if (!heights) {
    return [];
  }
  const n = heights.length;
  let rightMaxBuilding = 0;
  const res = [];

  for (let i = n - 1; i >= 0; i--) {
    if (heights[i] > rightMaxBuilding) {
      res.push(i);
      rightMaxBuilding = heights[i];
    }
  }

  return res.reverse();
};

```

### Performance

- **Time Complexity**: $O(n)$
- **Space Complexity**: $O(1)$

### Python
```python