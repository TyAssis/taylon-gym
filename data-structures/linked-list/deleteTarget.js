class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function deleteNode(head, value) {
    if (head === null) return null;
    if (head.val === value) {
        return head.next;
    }
    let current = head;
    while (current.next !== null) {
        if (current.next.val === value) {
            current.next = current.next.next;
            return head;
        }
        current = current.next;
    }
    return head;
}