class LRUListNode {
  val: number;
  key: number;
  next: LRUListNode | null;
  prev: LRUListNode | null;

  constructor(key: number, val: number) {
    this.val = val;
    this.key = key;
    this.next = null;
    this.prev = null;
  }
}

class LRUCache {
  private capacity: number;
  private cache: Map<number, LRUListNode>;
  private head: LRUListNode;
  private tail: LRUListNode;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.cache = new Map();
    this.head = new LRUListNode(-1, -1);
    this.tail = new LRUListNode(-1, -1);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  add(node) {
    const prevNode = this.tail.prev;
    prevNode.next = node;
    node.next = this.tail;
    node.prev = prevNode;
    this.tail.prev = node;
  }

  remove(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  get(key: number): number {
    if (!this.cache.has(key)) {
      return -1;
    }

    const node = this.cache.get(key)!;
    this.remove(node);
    this.add(node);

    return node.val;
  }

  put(key: number, value: number): void {
    if (this.cache.has(key)) {
      const node = this.cache.get(key);
      this.remove(node);
    }

    const newNode = new LRUListNode(key, value);
    this.cache.set(key, newNode);
    this.add(newNode);

    if (this.cache.size > this.capacity) {
      const nodeTodelete = this.head.next!;
      this.cache.delete(nodeTodelete.key);
      this.remove(nodeTodelete);
    }
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */