class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

// from the end
function createLinkedList(values) {
    if (!values) return null;
    let lastAdded = null;
    for (let i = values.length - 1; i >= 0; i--) {
        const node = new Node(values[i]);
        node.next = lastAdded;
        lastAdded = node;
    }
    return lastAdded;
}

// from the begining
function createLinkedList(values) {
    if (values.length === 0) {
        return null;
    }

    const head = new Node(values[0]);
    let current = head;
    for (let i = 1; i < values.length; i++) {
        current.next = new Node(values[i]);
        current = current.next;
    }

    return head;
}