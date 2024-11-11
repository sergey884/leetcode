# [146. LRU Cache](https://leetcode.com/problems/lru-cache/description/)

Design a data structure that follows the constraints of a [Least Recently Used (LRU) cache](https://en.wikipedia.org/wiki/Cache_replacement_policies#LRU).

Implement the `LRUCache` class:
- `LRUCache(int capacity)` Initialize the LRU cache with **positive** size `capacity`.
- `int get(int key)` Return the value of the key if the `key` exists, otherwise return `-1`.
- `void put(int key, int value)` Update the value of the `key` if the key exists. Otherwise, add the `key-value` pair to the cache. If the number of keys exceeds the `capacity` from this operation, **evict** the least recently used key.

The functions `get` and `put` must each run in `O(1)` average time complexity.

 
### Example 1:
> Input
>
> ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
>
> [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
>
> Output
>
> [null, null, null, 1, null, -1, null, -1, 3, 4]
>
> Explanation
>
> LRUCache lRUCache = new LRUCache(2);
>
> lRUCache.put(1, 1); // cache is {1=1}
>
> lRUCache.put(2, 2); // cache is {1=1, 2=2}
>
> lRUCache.get(1);    // return 1
>
> lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
>
> lRUCache.get(2);    // returns -1 (not found)
>
> lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
>
> lRUCache.get(1);    // return -1 (not found)
>
> lRUCache.get(3);    // return 3
>
> lRUCache.get(4);    // return 4
 

### Constraints:
- `1 <= capacity <= 3000`
- $0 <= key <= 10^{4}$
- $0 <= value <= 10^{5}$
- At most $2 * 10^{5}$ calls will be made to get and put.


## Solutions

### Performance

- **Time Complexity**: $O(1)$
- **Space Complexity**: $O(n)$

### Javascript
```javascript
class LRUCache {
  constructor(capacity) {
    this.cache = new Map();
    this.capacity = capacity;
    this.head = new ListNode(-1, -1);
    this.tail = new ListNode(-1, -1);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  add(node) {
    const previousEnd = this.tail.prev;
    previousEnd.next = node;
    node.next = this.tail;
    node.prev = previousEnd;
    this.tail.prev = node;
  }

  remove(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  get(key) {
    if (!this.cache.has(key)) {
      return -1;
    }

    const node = this.cache.get(key);
    this.remove(node);
    this.add(node);

    return node.val;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      const nodeToDelete = this.cache.get(key);
      this.remove(nodeToDelete);
    }

    const node = new ListNode(key, value);
    this.cache.set(key, node);
    this.add(node);

    if (this.cache.size > this.capacity) {
      const nodeToDelete = this.head.next;
      this.remove(nodeToDelete);
      this.cache.delete(nodeToDelete.key);
    }
  }
}
```

### Performance

- **Time Complexity**: $O(1)$
- **Space Complexity**: $O(n)$

### Python
```python
class LRUCache:
  def __init__(self, capacity: int):
    self.cache = {}
    self.head = ListNode(-1, -1)
    self.tail = ListNode(-1, -1)
    self.head.next = self.tail
    self.tail.prev = self.head
    self.capacity = capacity

  def add(self, node):
    previousEnd = self.tail.prev
    previousEnd.next = node
    node.next = self.tail
    node.prev = previousEnd
    self.tail.prev = node

  def remove(self, node):
    node.prev.next = node.next
    node.next.prev = node.prev

  def get(self, key: int) -> int:
    if key not in self.cache:
      return -1
    
    node = self.cache[key]
    self.remove(node)
    self.add(node)

    return node.val

  def put(self, key: int, value: int) -> None:
    if key in self.cache:
      oldNode = self.cache[key]
      self.remove(oldNode)

    node = ListNode(key, value)
    self.cache[key] = node
    self.add(node)

    if len(self.cache) > self.capacity:
      nodeToDelete = self.head.next
      self.remove(nodeToDelete)
      del self.cache[nodeToDelete.key]
```