function firstUniqueCharacter(s) {
    const set = new Set();
    const uniques = new Map();
    const index = -1;
    for (let i = 0; i < s.length; i++) {
        if (!set.has(s[i])) {
            uniques.set(s[i], i);
            set.add(s[i]);
        } else {
            uniques.delete(s[i]);
        }
    }
    return uniques.size > 0 ? [...uniques.values()][0] : -1;
}

function firstUniqueCharacter(s) {
    const charCount = new Map();
    for (const char of s) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }
    for (let i = 0; i < s.length; i++) {
        if (charCount.get(s[i]) === 1) {
            return i;
        }
    }
    return -1;
}