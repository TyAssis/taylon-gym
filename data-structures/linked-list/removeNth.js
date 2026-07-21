class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

function removeNthNode(head, n) {
    if (head === null || n < 1) {
        return head;
    }

    if (n === 1) {
        return head.next;
    }

    let current = head;
    let position = 1;

    while (current.next !== null && position < n - 1) {
        current = current.next;
        position++;
    }

    if (current.next !== null) {
        current.next = current.next.next;
    }

    return head;
}