function twoSum(arr, target) {
    const s = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (s.has(target - arr[i])) {
            return [s.get(target - arr[i]), i];
        }
        s.set(arr[i], i);
    }
    return null;
}
