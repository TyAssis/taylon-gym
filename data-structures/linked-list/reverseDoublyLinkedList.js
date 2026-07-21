class DoublyNode {
    constructor(val, next = null, prev = null) {
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
}

function reverseDoublyLinkedList(head) {
    if (head === null) {
        return null;
    }

    let current = head;
    let newHead = null;

    while (current !== null) {
        newHead = current;
        [current.prev, current.next] = [current.next, current.prev];
        current = current.prev;
    }

    return newHead;
}