// Definition for singly-linked list.
class ListNode {
  constructor(val, next = null) {
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
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = (list1, list2) => {
  if (!list1 && !list2) {
    return null;
  }

  const dummyHead = new ListNode(0);
  let l1Ptr = list1;
  let l2Ptr = list2;
  let curr = dummyHead;
  while (l1Ptr && l2Ptr) {
    if (l1Ptr.val > l2Ptr.val) {
      curr.next = l2Ptr;
      l2Ptr = l2Ptr.next
    } else {
      curr.next = l1Ptr;   
      l1Ptr = l1Ptr.next
    }
    curr = curr.next;
  }

  curr.next = l1Ptr || l2Ptr;
  
  return dummyHead.next;
};

const list1 = arrayToLinkedList([1, 2, 4]);
const list2 = arrayToLinkedList([1, 3, 4]);
console.log('mergeTwoLists: ', mergeTwoLists(list1, list2));
