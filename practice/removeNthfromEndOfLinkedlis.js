/*
Given a linked list, remove the n-th node from the end of list and return its head.

Example:

Given linked list: 1->2->3->4->5, and n = 2.

After removing the second node from the end, the linked list becomes 1->2->3->5.
Note:

Given n will always be valid.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function removeNthFromEnd(head, n) {
  if (!head.next) {
    return null;
  }

  const stack = [];
  const q = [];
  q.push(head);

  let node = head;

  while (node) {
    stack.push(node);
    node = node.next;
  }

  for (let i = 0; i < n; i++) {
    stack.pop();
  }

  let prev;

  if (stack.length) {
    prev = stack.pop();

    if (prev) {
      if (prev.next.next) {
        prev.next = prev.next.next;
      } else {
        prev.next = null;
      }
    }

    return q.pop();
  } else {
    let first = q.pop();
    first.val = first.next.val;
    first.next = first.next.next;
    return first;
  }
}

// Cleaner version having three pointers

var removeNthFromEnd = function(head, n) {
  let dummy = new ListNode(0);
  dummy.next = head;

  let first = dummy;
  let second = dummy;

  for (let i = 0; i <= n; i++) {
    first = first.next;
  }

  while (first) {
    first = first.next;
    second = second.next;
  }

  second.next = second.next.next;

  return dummy.next;
};
