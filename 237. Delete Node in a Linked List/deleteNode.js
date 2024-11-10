// Definition for singly-linked list.
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

// helper function to generate LinkedList from array
const arrayToLinkedList = (arr) => {
  if (!arr || !arr.length) {
    return null;
  }

  const dummyHead = new ListNode(0);
  let curr = dummyHead;

  for (let i = 0; i < arr.length; i++) {
    let node = new ListNode(arr[i]);
    curr.next = node;
    curr = curr.next;
  }

  return dummyHead.next;
}
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
const deleteNode = (node) => {
  node.val = node.next.val;
  node.next = node.next.next;
};


const head = arrayToLinkedList([4, 5, 1, 9]);
const node = head.next;
deleteNode(node);
console.log('head: ', head); // [4, 1, 9]
