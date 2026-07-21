// O(n2)
// splice is O(n) and loop is O(n)
function findWinner(n, k) {
    const line = [];
    for (let i = 0; i < n; i++) {
        line.push(i);
    }
    let count = 0;
    let target = 0;
    let lastRemoved = 0;
    while (line.length > 1) {
        target = count % line.length;
        count++;
        if (count === k) {
            lastRemoved = (target + lastRemoved) % line.length;
            line.splice(lastRemoved, 1);
            count = 0;
        } 
    }
    return line[0];
}

// O(n)
function findWinner(n, k) {
    // Create a queue with people numbered 0 to n-1
    const queue = Array.from({length: n}, (_, i) => i);

    // Continue until only one person remains
    while (queue.length > 1) {
        // Count k-1 people and move them to the back
        for (let i = 0; i < k - 1; i++) {
            queue.push(queue.shift());
        }
        // Eliminate the kth person
        queue.shift();
    }

    // Return the last remaining person
    return queue[0];
}
