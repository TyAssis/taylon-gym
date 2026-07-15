function compressString(s) {
    if (s.length === 0) {
        return "";
    }
    let result = "";
    let count = 1;
    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i - 1]) {
            // Same character, increment count
            count++;
        } else {
            // Different character, add to result
            result += s[i - 1] + count;
            count = 1;
        }
    }
    // Add the last group
    result += s[s.length - 1] + count;
    return result;
}
