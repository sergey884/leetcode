// Definition for singly-linked list.
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}


/**
 * @param {ListNode} head
 * @return {boolean}
 */
// memory complexitiy is O(n)
const hasCycle = (head) => {
  let nodes = new Set();
  let curr = head;

  while (curr) {
    if (nodes.has(curr)) {
      return true;
    }

    nodes.add(curr);
    curr = curr.next;
  }

  return false;
};
