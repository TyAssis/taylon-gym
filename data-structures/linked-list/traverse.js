class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

function traverse(head) {
    // start with the head
    let current = head;
    // check if it is the end
    while (current !== null) {
        // do whatever
        console.log(current.data);
        // move the head to the next node
        current = current.next;
    }
}