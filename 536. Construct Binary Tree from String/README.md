# [536. Construct Binary Tree from String](https://leetcode.com/problems/construct-binary-tree-from-string/description)

You need to construct a binary tree from a string consisting of parenthesis and integers.

The whole input represents a binary tree. It contains an integer followed by zero, one or two pairs of parenthesis. The integer represents the root's value and a pair of parenthesis contains a child binary tree with the same structure.

You always start to construct the left child node of the parent first if it exists.


### Example 1:
![](./images/diag1-grid.jpg)
> Input: s = "4(2(3)(1))(6(5))"
>
> Output: [4,2,6,3,1,5]


### Example 2:
> Input: s = "4(2(3)(1))(6(5)(7))"
>
> Output: [4,2,6,3,1,5,7]


### Example 3:
> Input: s = "-4(2(3)(1))(6(5)(7))"
>
> Output: [-4,2,6,3,1,5,7]
 

### Constraints:
- $0 <= s.length <= 3 * 10^{4}$
- `s` consists of digits, `'('`, `')'`, and `'-'` only.


## Solutions

### Performance

- **Time Complexity**: $O(n)$
- **Space Complexity**: $O(n)$

### Javascript
```javascript
const str2tree = (s) => {
  if (!s || s.length === 0) {
    return null;
  }

  let rootVal = "";
  let i = 0;
  while (s[i] !== "(" && i < s.length) {
    rootVal += s[i];
    i++;
  }

  const rootNode = new TreeNode(parseInt(rootVal));
  const helper = (i) => {
    let start = i;
    let parenhesisCount = 1;
    while (parenhesisCount && i < s.length) {
      if (s[i] === "(") {
        parenhesisCount++;
      } else if (s[i] === ")") {
        parenhesisCount--;
      }
      i++;
    }

    return {
      start,
      end: i
    };
  }

  i++;
  const { start, end } = helper(i);
  let leftSubtree = s.slice(start, end - 1);
  rootNode.left = str2tree(leftSubtree);
  i = end;

  if (i < s.length && s[i] === "(") {
    i++;
    const { start, end } = helper(i);
    let rightSubtree = s.slice(start, end - 1);
    rootNode.right = str2tree(rightSubtree);
  }

  return rootNode;
};
```

### Performance

- **Time Complexity**: $O(n)$
- **Space Complexity**: $O(n)$

### Python
```python

```