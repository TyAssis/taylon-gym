class Node {
    constructor(data) {
        this.data = data;
        this.next = null;   // link to the next node
        this.prev = null;   // link to the previous node
    }
}

function insertAfter(node, newNode) {
    newNode.prev = node;
    newNode.next = node.next;
    if (node.next !== null) {
        node.next.prev = newNode;
    }
    node.next = newNode;
}

function deleteNode(node) {
    if (node.prev !== null) {
        node.prev.next = node.next;
    }
    if (node.next !== null) {
        node.next.prev = node.prev;
    }
}