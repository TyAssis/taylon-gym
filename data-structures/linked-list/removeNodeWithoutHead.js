class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}


function deleteNode(node) {
  // Copy the next node's value
  node.val = node.next.val;

  // Skip the next node
  node.next = node.next.next;
}
