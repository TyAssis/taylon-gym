class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function reverseList(head) {
  let prev = null;
  let current = head;

  while (current !== null) {
    const next = current.next; // Save next
    current.next = prev;       // Invert the pointer
    prev = current;            // Prev becomes the current
    current = next;            // Traverse
  }

  return prev;
}