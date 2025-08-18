// Definition for singly-linked list.
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
// Definition for a binary tree node.
class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
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
 * @return {TreeNode}
 */
const sortedListToBST = (head) => {
  if (!head) {
    return null;
  }

  const findMiddle = (start) => {
    let slow = start;
    let fast = start;
    let prev = null;

    while (fast && fast.next) {
      prev = slow;
      fast = fast.next.next;
      slow = slow.next;
    }
    
    if (prev &&  prev.next) {
      prev.next = null;
    }

    return slow;
  }

  const mid = findMiddle(head);
  const root = new TreeNode(mid.val);

  if (mid === head) {
    return root;
  }

  root.left = sortedListToBST(head);
  root.right = sortedListToBST(mid.next);

  return root;
};


const head = arrayToLinkedList([-10, -3, 0, 5, 9]);
console.log('sortedListToBST: ', sortedListToBST(head));
