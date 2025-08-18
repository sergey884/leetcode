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
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
const partition = (head, x) => {
  const dummyLeft = new ListNode();
  const dummyRight = new ListNode();
  let left = dummyLeft;
  let right = dummyRight;

  let curr = head;
  while (curr) {
    if (curr.val < x) {
      left.next = curr;
      left = left.next;
    } else {
      right.next = curr;
      right = right.next;
    }
    curr = curr.next;
  }

  right.next = null;
  left.next = dummyRight.next;

  return dummyLeft.next;
};


const head = arrayToLinkedList([1, 4, 3, 2, 5, 2]);
const x = 3;
console.log('partition: ', partition(head, x));
