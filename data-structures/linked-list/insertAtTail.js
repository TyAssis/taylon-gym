class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function insertAtTail(head, value) {
    const newNode = new Node(value);
    if (head === null) {
        return newNode;
    }

    let current = head;
    while (current.next !== null) {
        current = current.next;
    }
    current.next = newNode;
    return head;
}