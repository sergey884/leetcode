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
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeInBetween = (list1, a, b, list2) => {
  let list1AthNode = list1;
  let list1BthNode = list1;

  a--;
  while (a > 0) {
    list1AthNode = list1AthNode.next;
    a--;
  }

  b++;
  while (b > 0) {
    list1BthNode = list1BthNode.next;
    b--;
  }

  let list2LastNode = list2
  while (list2LastNode.next) {
    list2LastNode = list2LastNode.next
  }

  list1AthNode.next = list2
  list2LastNode.next = list1BthNode

  return list1
};

const list1 = arrayToLinkedList([10, 1, 13, 6, 9, 5]);
const list2 = arrayToLinkedList([1000000, 1000001, 1000002]);
// [10,1,13,1000000,1000001,1000002,5]
const a = 3;
const b = 4;
console.log('mergeInBetween: ', mergeInBetween(list1, a, b, list2).next)
