# [108. Convert Sorted Array to Binary Search Tree](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/description/)

Given an integer array nums where the elements are sorted in **ascending order**, convert it to a 
height-balanced (A **height-balanced** binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.) binary search tree.


### Example 1:
![](./images/btree1.jpg)
> Input: nums = [-10,-3,0,5,9]
>
> Output: [0,-3,9,-10,null,5]
>
> Explanation: [0,-10,5,null,-3,null,9] is also accepted:

![](./images/btree2.jpg)


### Example 2:
![](./images/btree.jpg)
> Input: nums = [1,3]
>
> Output: [3,1]
>
> Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.


### Constraints:
- `1 <= nums.length <=` $10^4$
- $-10^4$ `<= nums[i] <=` $10^4$
- `nums` is sorted in a **strictly increasing** order.


## Solutions

### Javascript
```javascript
const sortedArrayToBST = (nums) => {
  const createTree = (left, right) => {
    if (left > right) {
      return null;
    }

    const mid = Math.round((left + right) / 2);
    const root = new TreeNode(nums[mid]);
    root.left = createTree(left, mid - 1);
    root.right = createTree(mid + 1, right);

    return root;
  };

  return createTree(0, nums.length - 1);
};
```

### Python
```python
class Solution:
  def sortedArrayToBST(self, nums: List[int]) -> Optional[TreeNode]:
    def createTree(left, right):
      if left > right:
        return None
      
      mid = (left + right) // 2
      root = TreeNode(nums[mid])
      root.left = createTree(left, mid - 1)
      root.right = createTree(mid + 1, right)
      
      return root
    
    return createTree(0, len(nums) - 1)
```