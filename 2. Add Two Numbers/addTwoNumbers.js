// Definition for singly-linked list.
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

// helper function got generate LinkedList from array
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const addTwoNumbers = function(l1, l2) {
  const dummyHead = new ListNode(0);
  let curr = dummyHead;
  let carry = 0;

  while (l1 || l2 || carry) {
    let l1Val = l1 ? l1.val : 0;
    let l2Val = l2 ? l2.val : 0;

    let sum = l1Val + l2Val + carry;
    let digit = sum % 10;
    carry = Math.floor(sum / 10);

    curr.next = new ListNode(digit);
    curr = curr.next;

    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }

  return dummyHead.next;
};

const l1 = arrayToLinkedList([2, 4, 3]);
const l2 = arrayToLinkedList([5, 6, 4]);

console.log('addTwoNumbers: ', addTwoNumbers(l1, l2));
