# [208. Implement Trie (Prefix Tree)](https://leetcode.com/problems/implement-trie-prefix-tree/description/)

A [trie](https://en.wikipedia.org/wiki/Trie) (pronounced as "try") or **prefix tree** is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

Implement the Trie class:
- `Trie()` Initializes the trie object.
- `void insert(String word)` Inserts the string `word` into the trie.
- `boolean search(String word)` Returns `true` if the string `word` is in the trie (i.e., was inserted before), and `false` otherwise.
- `boolean startsWith(String prefix)` Returns `true` if there is a previously inserted string `word` that has the prefix `prefix`, and `false` otherwise.


### Example 1:
> Input
>
> ["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
>
> [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
>
> Output
>
> [null, null, true, false, true, null, true]
>
> Explanation
>
> Trie trie = new Trie();
>
> trie.insert("apple");
>
> trie.search("apple");   // return True
>
> trie.search("app");     // return False
>
> trie.startsWith("app"); // return True
>
> trie.insert("app");
>
> trie.search("app");     // return True


### Constraints:
- `1 <= word.length, prefix.length <= 2000`
- `word` and `prefix` consist only of lowercase English letters.
- At most $3 * 10^{4}$ calls **in total** will be made to `insert`, `search`, and `startsWith`.


## Solutions

### Performance

- **Time Complexity**: $O(n)$
- **Space Complexity**: $O(n)$

### Javascript
```javascript
class TrieNode {
  constructor() {
    this.children = {};
    this.isEnd = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  /**
   * @param {string} word
   * @return {void}
   */
  insert(word) {
    let curr = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!curr.children[char]) {
        curr.children[char] = new TrieNode();
      }
      curr = curr.children[char];
    }
    curr.isEnd = true;
  }

  /**
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    let curr = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!curr.children[char]) {
        return false;
      }
      curr = curr.children[char];
    }

    return curr.isEnd;
  }

  /**
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith(prefix) {
    let curr = this.root;
    for (let i = 0; i < prefix.length; i++) {
      const char = prefix[i];
      if (!curr.children[char]) {
        return false;
      }
      curr = curr.children[char];
    }

    return true;
  }
}
```

### Performance

- **Time Complexity**: $O(n)$
- **Space Complexity**: $O(n)$

### Python
```python
class TrieNode:
  def __init__(self):
    self.children = {}
    self.isEnd = False

class Trie:
  def __init__(self):
    self.root = TrieNode()

  def insert(self, word: str) -> None:
    curr = self.root
    for c in word:
      if c not in curr.children:
        curr.children[c] = TrieNode()
      curr = curr.children[c]
    curr.isEnd = True

  def search(self, word: str) -> bool:
    curr = self.root
    for c in word:
      if c not in curr.children:
        return False
      curr = curr.children[c]
    
    return curr.isEnd
        

  def startsWith(self, prefix: str) -> bool:
    curr = self.root

    for c in prefix:
      if c not in curr.children:
        return False
      curr = curr.children[c]
    return True
```