function validAnagram(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const charCount = new Map();

    // Count characters in s
    for (const char of s) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    // Decrease count for characters in t
    for (const char of t) {
        if (!charCount.has(char)) {
            return false;
        }
        charCount.set(char, charCount.get(char) - 1);
        if (charCount.get(char) < 0) {
            return false;
        }
    }

    return true;
}