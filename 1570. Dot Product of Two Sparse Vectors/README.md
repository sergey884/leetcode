# [1570. Dot Product of Two Sparse Vectors](https://leetcode.com/problems/dot-product-of-two-sparse-vectors/description)

Given two sparse vectors, compute their dot product.

Implement class `SparseVector`:
- `SparseVector(nums)` Initializes the object with the vector `nums`
- `dotProduct(vec)` Compute the dot product between the instance of SparseVector and `vec`

A **sparse vector** is a vector that has mostly zero values, you should store the sparse vector **efficiently** and compute the dot product between two SparseVector.

**Follow up:** What if only one of the vectors is sparse?

 

### Example 1:
> Input: nums1 = [1,0,0,2,3], nums2 = [0,3,0,4,0]
>
> Output: 8
>
> Explanation: v1 = SparseVector(nums1) , v2 = SparseVector(nums2)
>
> v1.dotProduct(v2) = 1*0 + 0*3 + 0*0 + 2*4 + 3*0 = 8


### Example 2:
> Input: nums1 = [0,1,0,0,0], nums2 = [0,0,0,0,2]
>
> Output: 0
>
> Explanation: v1 = SparseVector(nums1) , v2 = SparseVector(nums2)
>
> v1.dotProduct(v2) = 0*0 + 1*0 + 0*0 + 0*0 + 0*2 = 0


### Example 3:
> Input: nums1 = [0,1,0,0,2,0,0], nums2 = [1,0,0,0,3,0,4]
>
> Output: 6
 

### Constraints:
- `n == nums1.length == nums2.length`
- $1 <= n <= 10^{5}$
- `0 <= nums1[i], nums2[i] <= 100`


## Solutions

### Performance

- **Time Complexity**: $O(n)$
- **Space Complexity**: $O(L)$ where `L` is the number of non-zero elements

### Javascript
```javascript
class SparseVector {
  constructor(nums) {
    this.indexToNum = {};

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) {
        this.indexToNum[i] = nums[i];
      }
    }
  }

  // Return the dotProduct of two sparse vectors
  /**
   * @param {SparseVector} vec
   * @return {number}
   */
  dotProduct(vec) {
    const indexToNum1 = Object.entries(this.indexToNum);
    const indexToNum2 = vec.indexToNum;

    let dotProductValue = 0;
    for (let entrie of indexToNum1) {
      const [index, val] = entrie;
      if (indexToNum2[index]) {
        dotProductValue += val * indexToNum2[index];
      }
    }

    return dotProductValue;
  }
}
```


### Performance

- **Time Complexity**: $O(n)$
- **Space Complexity**: $O(n)$

### Javascript
```javascript
class SparseVector {
  constructor(nums) {
    this.nums = nums;
  }

  getNums() {
    return this.nums;
  }

  // Return the dotProduct of two sparse vectors
  /**
   * @param {SparseVector} vec
   * @return {number}
   */
  dotProduct(vec) {
    const v1Nums = this.getNums();
    const v2Nums = vec.getNums();

    let dotProductValue = 0;
    for (let i = 0; i < v1Nums.length; i++) {
      dotProductValue += v1Nums[i] * v2Nums[i];
    }

    return dotProductValue;
  }
}
```


### Performance

- **Time Complexity**: $O(n)$
- **Space Complexity**: $O(L)$ where `L` is the number of non-zero elements

### Python
```python

```