class ListNode:
  def __init__(self, key, val, next = None, prev = None) -> None:
    self.key = key
    self.val = val
    self.next = next
    self.prev = prev

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


# Your LRUCache object will be instantiated and called as such:
# obj = LRUCache(capacity)
# param_1 = obj.get(key)
# obj.put(key,value)

lRUCache = LRUCache(2)
lRUCache.put(1, 1) # cache is {1=1}
lRUCache.put(2, 2) # cache is {1=1, 2=2}
lRUCache.get(1)    # return 1
lRUCache.put(3, 3) # LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.get(2)    # returns -1 (not found)
lRUCache.put(4, 4) # LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1)    # return -1 (not found)
lRUCache.get(3)    # return 3
lRUCache.get(4)    # return 4