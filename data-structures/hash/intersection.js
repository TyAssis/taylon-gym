function intersectionOfArrays(nums1, nums2) {
    const count1 = new Map();
    for (const num of nums1) {
        count1.set(num, (count1.get(num) || 0) + 1);
    }

    const result = [];
    for (const num of nums2) {
        if ((count1.get(num) || 0) > 0) {
            result.push(num);
            count1.set(num, count1.get(num) - 1);
        }
    }

    return result;
}