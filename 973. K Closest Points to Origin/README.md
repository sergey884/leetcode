# [973. K Closest Points to Origin](https://leetcode.com/problems/k-closest-points-to-origin/description)

Given an array of `points` where $points[i] = [x_{i}, y_{i}]$ represents a point on the **X-Y** plane and an integer `k`, return the `k` closest points to the origin `(0, 0)`.

The distance between two points on the X-Y plane is the Euclidean distance (i.e., $sqrt((x_{1} - x_{2})^{2} + (y_{1} - y_{2})^{2})$.

You may return the answer in **any order**. The answer is **guaranteed** to be **unique** (except for the order that it is in).


### Example 1:
![](./images/closestplane1.jpg)
> Input: points = [[1,3],[-2,2]], k = 1
>
> Output: [[-2,2]]
>
> Explanation:
>
> The distance between (1, 3) and the origin is sqrt(10).
>
> The distance between (-2, 2) and the origin is sqrt(8).
>
> Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
>
> We only want the closest k = 1 points from the origin, so the answer is just [[-2,2]].


### Example 2:
> Input: points = [[3,3],[5,-1],[-2,4]], k = 2
>
> Output: [[3,3],[-2,4]]
>
> Explanation: The answer [[-2,4],[3,3]] would also be accepted.
 

### Constraints:
- $1 <= k <= points.length <= 10^{4}$
- $-10^{4} <= x_{i}, y_{i} <= 10^{4}$


## Solutions

### Performance

- **Time Complexity**: $O(n * log n)$
- **Space Complexity**: $O(k)$

### Javascript
```javascript
const kClosest = (points, k) => {
  const calculateDistance = (point1, point2 = [0, 0]) => (
    Math.sqrt((point1[0] - point2[0]) ** 2 + (point1[1] - point2[1]) ** 2)
  );

  points.sort((a, b) => (calculateDistance(a) - calculateDistance(b)));

  return points.slice(0, k);
};
```

### Performance

- **Time Complexity**: $O(n * logn)$
- **Space Complexity**: $O(k)$

### Python
```python
```