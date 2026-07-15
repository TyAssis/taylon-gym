/**
 * Topic: Arrays
 * Technique: Sliding Window
 * Problem: Minimum Window Substring
 **/

const minWindow = function(s, t) {
  if (s.length < t.length) return "";
  let startIndex = 0;
  let remaining = t.length;
  let minWindow = [0, Number.POSITIVE_INFINITY];

  const chs = new Map();
  for (const ch of t) {
    chs.set(ch, (chs.get(ch) || 0) + 1);
  }
  
  for (let endIndex = 0; endIndex < s.length; endIndex++) {
    const ch = s[endIndex];
    if (chs.has(ch) && chs.get(ch) > 0) {
      remaining--;
    }
    chs.set(ch, (chs.get(ch) || 0) - 1);

    if (remaining === 0) {
      // move second pointer up to the min window within t
      while (true) {
        const startCh = s[startIndex];
        if (chs.has(startCh) && chs.get(startCh) === 0) {
          break;
        }
        // some t value might be less than 1 if repeated (that's not min window yet)
        chs.set(startCh, (chs.get(startCh) || 0) + 1)
        startIndex++;
      }

      if (minWindow[1] - minWindow[0] > endIndex - startIndex) {
        minWindow = [startIndex, endIndex];
      }
      chs.set(s[startIndex], (chs.get(s[startIndex]) || 0) + 1)
      startIndex++;
      remaining++;
    }
  }

  if (minWindow[1] === Number.POSITIVE_INFINITY) return "";

  // If the minWindow is infinity, then we don't have a substring
  return minWindow[1] >= s.length ? "" : s.slice(minWindow[0], minWindow[1] + 1);
}

console.log(minWindow("ADOBECODEBANC", "ABC"));