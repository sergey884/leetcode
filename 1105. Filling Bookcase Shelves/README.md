# [1105. Filling Bookcase Shelves](https://leetcode.com/problems/filling-bookcase-shelves/description/)

You are given an array books where $books[i] = [thickness_{i}, height_{i}]$ indicates the thickness and height of the $i^{th}$ book. You are also given an integer `shelfWidth`.

We want to place these books in order onto bookcase shelves that have a total width `shelfWidth`.

We choose some of the books to place on this shelf such that the sum of their thickness is less than or equal to `shelfWidth`, then build another level of the shelf of the bookcase so that the total height of the bookcase has increased by the maximum height of the books we just put down. We repeat this process until there are no more books to place.

Note that at each step of the above process, the order of the books we place is the same order as the given sequence of books.

- For example, if we have an ordered list of `5` books, we might place the first and second book onto the first shelf, the third book on the second shelf, and the fourth and fifth book on the last shelf.

Return the minimum possible height that the total bookshelf can be after placing shelves in this manner.


### Example 1:
![](./images/shelves.png)
> Input: books = [[1,1],[2,3],[2,3],[1,1],[1,1],[1,1],[1,2]], shelfWidth = 4
>
> Output: 6
>
> Explanation:
>
> The sum of the heights of the 3 shelves is 1 + 3 + 2 = 6.
>
> Notice that book number 2 does not have to be on the first shelf.


### Example 2:
> Input: books = [[1,3],[2,4],[3,2]], shelfWidth = 6
>
> Output: 4
 

### Constraints:
- `1 <= books.length <= 1000`
- `1 <= thicknessi <= shelfWidth <= 1000`
- `1 <= heighti <= 1000`


## Solutions

### Performance

- **Time Complexity**: $O(n^{2})$
- **Space Complexity**: $O(n)$

### Javascript
```javascript
const minHeightShelves = (books, shelfWidth) => {
  const cache = {};
  const helper = (i) => {
    if (i === books.length) {
      return 0;
    }

    if (cache[i]) {
      return cache[i];
    }

    let maxHeight = 0;
    let currWidth = shelfWidth;
    cache[i] = Infinity;

    for (let j = i; j < books.length; j++) {
      const [width, height] = books[j];
      if (currWidth < width) {
        break;
      }

      currWidth -= width;
      maxHeight = Math.max(maxHeight, height);
      cache[i] = Math.min(cache[i], helper(j + 1) + maxHeight);
    }

    return cache[i];
  }

  return helper(0);
};
```

### Performance

- **Time Complexity**: $O(n^{2})$
- **Space Complexity**: $O(n)$

### Python
```python
class Solution:
  def minHeightShelves(self, books: List[List[int]], shelfWidth: int) -> int:
    cache = {}
    def helper(i):
      if i == len(books):
        return 0
      if i in cache:
        return cache[i]
      curr_width = shelfWidth
      max_height = 0
      cache[i] = float('inf')
      
      for j in range(i, len(books)):
        width, height = books[j]
        if curr_width < width:
          break
        curr_width -= width
        max_height = max(max_height, height)
        cache[i] = min(cache[i], helper(j + 1) + max_height)
      
      return cache[i]
    
    return helper(0)
```