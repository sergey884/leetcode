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
 * @return {ListNode}
 */
const removeZeroSumSublists = (head) => {
    let curr = head;
    let prefix = 0;
    const dummyHead = new ListNode(prefix, head);
    let prefixToNode = { 0: dummyHead }

    while (curr) {
      console.log('prefix: ', prefix);
      prefix += curr.val;
      prefixToNode[prefix] = curr;
      curr = curr.next;
    }

    curr = dummyHead;
    prefix = 0;

    while (curr) {
      prefix += curr.val;
      curr.next = prefixToNode[prefix].next;
      curr = curr.next;
    }

    console.log('listToArr: ', listToArr);
    console.log('listToArr: ', prefixToNode);
    // console.log('dummyHead: ', dummyHead.next);
    return dummyHead.next;
};

const head = arrayToLinkedList([1, 2, -3, 3, 1]);
console.log('removeZeroSumSublists: ', removeZeroSumSublists(head));