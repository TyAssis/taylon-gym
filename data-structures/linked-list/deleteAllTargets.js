class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}


// with recursion for the head
function deleteAllOccurrences(head, value) {
    if (head === null) return null;
    let currentHead = head;
    while (head.val === value) {
        return deleteAllOccurrences(head.next, value);
    }
    let current = head;
    while (current.next !== null) {
        if (current.next.val === value) {
            current.next = current.next.next;
        }
        current = current.next;
    }

    return head;
}

// with dummy head
function deleteAllOccurrences(head, value) {
    // Create dummy node to handle head removal
    const dummy = new Node(0);
    dummy.next = head;

    let current = dummy;
    while (current.next !== null) {
        if (current.next.val === value) {
            // Skip the node
            current.next = current.next.next;
        } else {
            // Only advance if we didn't delete
            current = current.next;
        }
    }

    return dummy.next;
}
